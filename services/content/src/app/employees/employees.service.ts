import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/employee-update-input';
import { Employee } from './models/employees.model';
import { EmployeeEntry } from './dto/EmployeeEntry';
import EmployeeClient from '../sdk/employeeClient';
import convertEntry from '../utils/convertEntry';
import { HttpService } from '@nestjs/axios';
import { API_BASE_URL, API_KEY, MANAGEMENT_TOKEN } from '../contants/content-stack';

@Injectable()
export class EmployeesService {

    constructor(private readonly httpService: HttpService) {}

    async createEmployee(data: CreateEmployeeInput): Promise<Employee> {
        try {
            const newEntry = await EmployeeClient.createEmployee(data);
            return convertEntry(newEntry);
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    async findAll(): Promise<Employee[]> {
        try {
            const allEmployees = await EmployeeClient.findAll();
            return allEmployees.map(employee => convertEntry(employee));
        } catch (err) {
            console.error("Failed to find all employees (service)", err);
            return null;
        }
    }

    async findOne(id: string): Promise<Employee> {
        try{
            const employee = await EmployeeClient.findOne(id);
            return convertEntry(employee);
        } catch (err) {
            console.error("Failed to find one employee (service)", err);
            return null;
        }
    }

    async updateEmployee(newData: Employee){
        try {
            const result = await EmployeeClient.updateOne(newData)
            return convertEntry(result);
        } catch (err) {
            console.error("Failed to update employee (service)", err);
        }
    }

    async deleteEmployee(id: string){
        try {
            const result = await EmployeeClient.deleteOne(id);
            return result ? true : false;
        } catch (err) {
            console.error("Failed to delete entry.", err);
            return null;
        }
    }

}
