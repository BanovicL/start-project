import BaseClient from "./base";
import { useQuery } from "react-query";
import axios from "axios";
import { IEmployee } from "../types/employee";

export default class EmployeeClient extends BaseClient {

    static async findAll() {
        
        try {
            const QUERY = `
            {
                employees {
                    id,
                    firstname,
                    lastname,
                    position,
                    email,
                    address
                }
            }
            `;

            const response = await axios({
                url: this.base_url,
                method: "POST",
                data: {
                    query: QUERY
                }
            })
            return response.data.data.employees;
        } catch (err) {
            console.error("Failed to find list of employees", err);
            return null;
        }
        
    }

    static async findOne(id: string) {
        try {
            const QUERY = `
            {
                employee(id: "${id}") {
                    id,
                    firstname,
                    lastname,
                    position,
                    email,
                    address
                }
            }`

            const response = await axios({
                url: this.base_url,
                method: "POST",
                data: {
                    query: QUERY
                }
            })

            return response.data.data.employee;
        } catch (err) {
            console.error("Failed to find one employee.", err);
            return null;
        }
    }

    static async create({ id, firstname, lastname, position, email, address }: IEmployee) {
        try {
            const MUTATION = `
            mutation {
                createEmployee(data: {
                    firstname: "${firstname}",
                    lastname: "${lastname}",
                    position: "${position}",
                    email: "${email}",
                    address: "${address}"
                }) {
                    id, 
                    firstname,
                    lastname,
                    position,
                    email,
                    address
                }
            }
            `;

            const response = await axios({
                url: this.base_url,
                method: "POST",
                data: {
                    query: MUTATION
                }
            })

            return response.data.data.createEmployee;
        } catch (err) {
            console.error("Failed to create employee.", err);
            return null;
        }
    }

    static async deleteOne(id: string) {
        try {

            const MUTATION = `
                mutation {
                    deleteEmployee(id: "${id}")
                }
            `

            const response = await axios({
                url: this.base_url,
                method: "POST",
                data: {
                    query: MUTATION
                }
            });

            return response.data.data.deleteEmployee;

        } catch (err) {
            console.error("Failed to delete employee.", err);
            return null;
        }
    }

    static async updateOne(data: IEmployee) {
        try {
            const MUTATION = `
                mutation{
                    updateEmployee(data:{
                    id: "${data.id}",
                    firstname: "${data.firstname}",
                    lastname: "${data.lastname}",
                    position: "${data.position}",
                    email: "${data.email}",
                    address: "${data.address}"
                }) {
                    id, 
                    firstname,
                    lastname,
                    position,
                    email,
                    address
                }
                }
            `;

            const response = await axios({
                url: this.base_url,
                method: "POST",
                data: {
                    query: MUTATION
                }
            });
            return response.data.data.updateEmployee;
        } catch (err) {
            console.error("Failed to update employee.", err);
            return null;
        }
    }

}