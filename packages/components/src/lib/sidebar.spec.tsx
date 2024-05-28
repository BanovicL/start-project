import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

describe("Sidebar tests", () => {

    it("component should render", () => {
        const { baseElement } = render(<Sidebar employees={[]}/>, {
            wrapper: BrowserRouter
        })
        expect(baseElement).toBeTruthy();
    });

    it("component should render list of 0 employees", () => {
        const { queryAllByTestId } = render(<Sidebar employees={[]} />, {
            wrapper: BrowserRouter
        })
        expect(queryAllByTestId("employee-link")).toHaveLength(0);
    })

    it("component should render one user with name Luka Banovic", () => {
        const mockEmployee = {
            id: "1231424",
            firstname: "Luka",
            lastname: "Banovic",
            position: "Software Engineer",
            email: "luka@mail.com",
            address: "Serbia"
        }
        const { queryAllByText } = render(<Sidebar employees={[mockEmployee]}/>, {
            wrapper: BrowserRouter
        });

        expect(queryAllByText("Luka Banovic")).toHaveLength(1);
    });

    it("component should render 3 employees", () => {
        const mockEmployees = [
            {
                id: "1231424",
                firstname: "Luka",
                lastname: "Banovic",
                position: "Software Engineer",
                email: "luka@mail.com",
                address: "Serbia"
            },
            {
                id: "5345",
                firstname: "Luka",
                lastname: "Banovic",
                position: "Software Engineer",
                email: "luka@mail.com",
                address: "Serbia"
            },
            {
                id: "12312342424",
                firstname: "Luka",
                lastname: "Banovic",
                position: "Software Engineer",
                email: "luka@mail.com",
                address: "Serbia"
            }
        ];

        const { queryAllByTestId } = render(<Sidebar employees={mockEmployees} />, {
            wrapper: BrowserRouter
        })

        expect(queryAllByTestId("employee-link")).toHaveLength(3);

    })

});