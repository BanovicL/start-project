import { Injectable } from '@nestjs/common';
import { Employee } from './models/employees.model';

@Injectable()
export class EmployeesService {

    employees = [
        {
          id: "fsdlvzxcv",
          firstName: "John",
          lastName: "Doe",
          position: "Software Engineer",
          email: "john.doe@example.com",
          address: "123 Main St, Anytown, USA"
        },
        {
          id: "12dfasg",
          firstName: "Jane",
          lastName: "Smith",
          position: "Project Manager",
          email: "jane.smith@example.com",
          address: "456 Oak St, Anytown, USA"
        },
        {
          id: "fsd17tf",
          firstName: "Bob",
          lastName: "Johnson",
          position: "Data Analyst",
          email: "bob.johnson@example.com",
          address: "789 Pine St, Anytown, USA"
        },
      ];

    async createEmployee(data: Employee): Promise<Employee[]> {
        this.employees.push(data);
        return this.employees;
    }

    async findAll(): Promise<Employee[]> {
        return this.employees;
    }

    async findOne(id: string): Promise<Employee> {
        return this.employees.find(employee => employee.id === id);
    }

    async updateEmployee(newData: Employee): Promise<Employee>{
        this.employees = this.employees.map((employee) => {
            if(employee.id === newData.id){
                employee = { ...newData }
            }
            return employee
        })
        return this.employees.find(employee => employee.id === newData.id);
    }

    async deleteEmployee(id: string): Promise<Boolean> {
        this.employees = this.employees.filter(employee => employee.id != id);
        return true;
    }

}
