import type { BaseEntry } from "@contentstack/delivery-sdk";

export interface EmployeeEntry extends BaseEntry {
    firstname: string,
    lastname: string,
    position: string,
    email: string,
    address: string
}