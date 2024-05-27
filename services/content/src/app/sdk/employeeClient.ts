import BaseSDKClient from "./base";
import { CreateEmployeeInput } from "../employees/dto/employee-update-input";
import { v4 as uuidv4 } from 'uuid';
import { Employee } from "../employees/models/employees.model";

export default class EmployeeClient extends BaseSDKClient {

    static async createEmployee(employeeData: CreateEmployeeInput) {
        try {
            const newEmployee = { ...employeeData, title: uuidv4() };
        
            const newEntry = await this.contentstackManagementStack.contentType("employees")
                                                                    .entry()
                                                                    .create({ entry: newEmployee });
            const publishDetails = {
                "locales": [
                    "en-us"
                    ],
                "environments": [
                    "staging"
                    ]
            };
            await newEntry.publish({ publishDetails: publishDetails });                                                       
            return newEntry
        } catch (err) {
            console.error(err);
        }
    }

    static async findAll() {
        try {
            const Query = this.contentstackDeliveryStack.ContentType("employees").Query();
            const result = await Query
            .includeContentType()
            .toJSON()
            .find();
            return result[0];
        } catch (err) {
            console.error("Failed to findall", err);
        }
    }

    static async findOne(id: string) {
        try {
            const Query = this.contentstackDeliveryStack.ContentType("employees").Entry(id);
            const result = await Query.includeContentType().toJSON().fetch();
            return result;
        } catch (err) {
            console.error("Failed to find one entry.", err);
        }
    }

    static async updateOne(employee: Employee) {
        try {
            const entry = await this.contentstackManagementStack
                                        .contentType("employees")
                                        .entry(employee.id)
                                        .fetch();
            entry.firstname = employee.firstname;
            entry.lastname = employee.lastname;
            entry.position = employee.position;
            entry.email = employee.email;
            entry.address = employee.address;
            const updatedEntry = await entry.update();
            const publishDetails = {
                "locales": [
                    "en-us"
                ],
                "environments": [
                    "staging"
                ]
            };
            await entry.publish({ publishDetails: publishDetails });
            return updatedEntry;
        } catch (err) {
            console.error("Failed to update entry", err);
        }
    }

    static async deleteOne(id: string) {
        const response = await this.contentstackManagementStack
                                    .contentType("employees")
                                    .entry(id)
                                    .delete();
        return response.notice;
    }

}