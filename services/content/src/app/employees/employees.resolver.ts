import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Employee } from './models/employees.model';
import { EmployeesService } from './employees.service';
import { UpdateEmployeeInput, CreateEmployeeInput } from './dto/employee-update-input';

@Resolver(of => Employee)
export class EmployeesResolver {
    constructor(private employeeService: EmployeesService) {}

    @Query(returns => [Employee])
    async employees() {
        return this.employeeService.findAll();
    }

    @Query(returns => Employee)
    async employee(@Args('id') id: string) {
        return this.employeeService.findOne(id);
    }

    @Mutation(returns => Employee)
    async createEmployee(@Args('data') data: CreateEmployeeInput) {
        const newEmployee = await this.employeeService.createEmployee(data);
        return newEmployee;
    }

    @Mutation(returns => Employee)
    async updateEmployee(@Args('data') employeeNewData: UpdateEmployeeInput){
        return this.employeeService.updateEmployee(employeeNewData);
    }

    @Mutation(returns => Boolean)
    async deleteEmployee(@Args('id') employeeId: string) {
        try {
            const result = await this.employeeService.deleteEmployee(employeeId);
            return result;
        } catch (err) {
            console.error("Failed to delete employee gql", err);
        }
    }

}
