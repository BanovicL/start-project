import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from './employees.service';
import { HttpModule } from '@nestjs/axios';
import EmployeeClient from '../sdk/employeeClient';
import convertEntry from "../utils/convertEntry";
import { CreateEmployeeInput } from './dto/employee-update-input';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [EmployeesService],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe("createEmployee", () => {
    it("should create employee Luka Banovic HR", async () => {
      const result = {
        id: undefined,
        firstname: "Luka",
        lastname: "Banovic",
        position: "HR",
        email: "luka@gmail.com",
        address: "Serbia"
      };
      jest.spyOn(EmployeeClient, "createEmployee").mockImplementation((): any => result);
      jest.mock("../utils/convertEntry", (): any => result);
      expect(await service.createEmployee(result)).toStrictEqual(result);
    });
    it("should create employee Ana Jovanovic Software Engineer", async () => {
      const result = {
        id: undefined,
        firstname: "Ana",
        lastname: "Jovanovic",
        position: "Software Engineer",
        email: "ana@gmail.com",
        address: "Serbia"
      };
      jest.spyOn(EmployeeClient, "createEmployee").mockImplementation((): any => result);
      jest.mock("../utils/convertEntry", (): any => result);
      expect(await service.createEmployee(result)).toStrictEqual(result);
    });
    it("should create employee Marko Markovic Project Manager", async () => {
      const result = {
        id: undefined,
        firstname: "Marko",
        lastname: "Markovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      };
      jest.spyOn(EmployeeClient, "createEmployee").mockImplementation((): any => result);
      jest.mock("../utils/convertEntry", (): any => result);
      expect(await service.createEmployee(result)).toStrictEqual(result);
    });
  });

  describe("findAll", () => {
    it("should return five employees", async () => {
      const result = [
        {
          id: undefined,
          firstname: "Marko",
          lastname: "Markovic",
          position: "Project Manager",
          email: "marko@gmail.com",
          address: "Serbia"
        },
        {
          id: undefined,
          firstname: "Marko",
          lastname: "Markovic",
          position: "Project Manager",
          email: "marko@gmail.com",
          address: "Serbia"
        },
        {
          id: undefined,
          firstname: "Marko",
          lastname: "Markovic",
          position: "Project Manager",
          email: "marko@gmail.com",
          address: "Serbia"
        },
        {
          id: undefined,
          firstname: "Marko",
          lastname: "Markovic",
          position: "Project Manager",
          email: "marko@gmail.com",
          address: "Serbia"
        },
        {
          id: undefined,
          firstname: "Marko",
          lastname: "Markovic",
          position: "Project Manager",
          email: "marko@gmail.com",
          address: "Serbia"
        }
      ];

      jest.spyOn(EmployeeClient, "findAll").mockImplementation((): any => result);
      jest.mock("../utils/convertEntry", (): any => result);
      expect(await service.findAll()).toStrictEqual(result);
    })
    it("should throw error", async () => {
      const result = [];

      jest.spyOn(EmployeeClient, "findAll").mockImplementation((): any => Promise.reject());
      expect(await service.findAll()).toBeFalsy();
    });
  })

  describe("findOne", () => {
    it("should return employee Luka Banovic", async () => {
      const result = {
        id: undefined,
        firstname: "Marko",
        lastname: "Markovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      };
      jest.spyOn(EmployeeClient, "findOne").mockImplementation((): any => result);
      jest.mock("../utils/convertEntry", (): any => result);
      expect(await service.findOne("12344")).toStrictEqual(result);
    })
  })
  it("should throw error", async () => {
    const result = {
      id: undefined,
        firstname: "Marko",
        lastname: "Markovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
    };
    jest.spyOn(EmployeeClient, "findOne").mockImplementation((): any => Promise.reject());
    expect(await service.findOne("214")).toBe(null);
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
      };
      const output = {
        id: undefined,
        firstname: "Luka",
        lastname: "Petrovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      };

      jest.spyOn(EmployeeClient, "updateOne").mockImplementation((): any => output);
      jest.mock("../utils/convertEntry", (): any => output);
      expect(await service.updateEmployee(input)).toStrictEqual(output);
    });
    it("should throw error", async () => {
      const input = {
        id: undefined,
        firstname: "Luka",
        lastname: "Banovic",
        position: "Project Manager",
        email: "marko@gmail.com",
        address: "Serbia"
      };
      jest.spyOn(EmployeeClient, "updateOne").mockImplementation((): any => Promise.reject());
      expect(await service.updateEmployee(input)).toBeFalsy();
    });
  });

  describe("deleteEmployee", () => {
    it("should delete employee", async () => {
      jest.spyOn(EmployeeClient, "deleteOne").mockImplementation((): any => true);
      expect(await service.deleteEmployee("123")).toBeTruthy();
    })
    it("should not delete employee", async () => {
      jest.spyOn(EmployeeClient, "deleteOne").mockImplementation((): any => false)
      expect(await service.deleteEmployee("124")).toBeFalsy();
    })
    it("should throw error", async () => {
      jest.spyOn(EmployeeClient, "deleteOne").mockImplementation((): any => Promise.reject());
      expect(await service.deleteEmployee("1245")).toBeNull();
    })
  })

});
