import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesResolver } from './employees.resolver';
import { EmployeesService } from './employees.service';
import { HttpModule, HttpService } from '@nestjs/axios';

describe('EmployeesResolver', () => {
  let resolver: EmployeesResolver;
  let employeeService: EmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [EmployeesResolver, EmployeesService],
    }).compile();

    resolver = module.get<EmployeesResolver>(EmployeesResolver);
    employeeService = await module.resolve(EmployeesService);
  })
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe("employees", () => {

    it("should return 3 employees", async () => {
      const result = [
        {
          id: undefined,
          firstname: "Luka",
          lastname: "Banovic",
          position: "Project Manager",
          email: "marko@gmail.com",
          address: "Serbia"
        },
        {
          id: undefined,
          firstname: "Luka",
          lastname: "Banovic",
          position: "Project Manager",
          email: "marko@gmail.com",
          address: "Serbia"
        },
        {
          id: undefined,
          firstname: "Luka",
          lastname: "Banovic",
          position: "Project Manager",
          email: "marko@gmail.com",
          address: "Serbia"
        }
      ]
      jest.spyOn(employeeService, "findAll").mockImplementation((): any => result);
      expect(await resolver.employees()).toStrictEqual(result);
    });
    
    it("should return one employee", async () => {
      const result = {
        id: undefined,
        firstname: "Luka",
        lastname: "Banovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      };
      jest.spyOn(employeeService, "findAll").mockImplementation((): any => result);
      expect(await resolver.employees()).toStrictEqual(result);
    })

    it("should return empty array", async () => {
      const result = [];
      jest.spyOn(employeeService, "findAll").mockImplementation((): any => result);
      expect(await resolver.employees()).toStrictEqual(result);
    })

  });

  describe("employee", () => {
    it("should return Luka Banovic", async () => {
      const result = {
        id: undefined,
        firstname: "Luka",
        lastname: "Banovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      };
      jest.spyOn(employeeService, "findOne").mockImplementation((): any => result)
      expect(await resolver.employee("Dfasdf")).toStrictEqual(result);
    })
    it("should return Ana Jovanovic", async () => {
      const result = {
        id: undefined,
        firstname: "Ana",
        lastname: "Jovanovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      };
      jest.spyOn(employeeService, "findOne").mockImplementation((): any => result)
      expect(await resolver.employee("Dfasdf")).toStrictEqual(result);
    })
  });

  describe("updateEmployee", () => {
    it("should update Luka Banovic to Luka Petrovic", async () => {
      const input = {
        id: undefined,
        firstname: "Luka",
        lastname: "Banovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      }
      const output = {
        id: undefined,
        firstname: "Luka",
        lastname: "Petrovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      }
      jest.spyOn(employeeService, "updateEmployee").mockImplementation((): any => output);
      expect(await resolver.updateEmployee(input)).toStrictEqual(output);
    });
  });

  describe("deleteEmployee", () => {
    it("should delete employee", async () => {
      jest.spyOn(employeeService, "deleteEmployee").mockImplementation((): any => true);
      expect(await resolver.deleteEmployee("2342w")).toBeTruthy();
    })
    it("should not delete employee", async () => {
      jest.spyOn(employeeService, "deleteEmployee").mockImplementation((): any => false);
      expect(await resolver.deleteEmployee("2342w")).toBeFalsy();
    })
  });

});
