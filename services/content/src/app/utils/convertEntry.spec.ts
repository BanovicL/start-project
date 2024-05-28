import convertEntry from "./convertEntry";

describe("convertEntry helper", () => {
    it("should convert entry into employee type object correctly", () => {
        const input = {
            uid: "12345",
            firstname: "Luka",
            lastname: "Banovic",
            position: "HR",
            email: "luka@mail.com",
            address: "Serbia"
        }
        const output = {
            id: "12345",
            firstname: "Luka",
            lastname: "Banovic",
            position: "HR",
            email: "luka@mail.com",
            address: "Serbia"
        }
        expect(convertEntry(input)).toStrictEqual(output);
    })
})