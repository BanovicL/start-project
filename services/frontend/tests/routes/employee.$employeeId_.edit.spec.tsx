import EditEmployee from "services/frontend/app/routes/employee.$employeeId_.edit";
import { screen, render, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { installGlobals } from "@remix-run/node";
import { createRemixStub } from "@remix-run/testing";

installGlobals();

describe("Edit employee tests", () => {
    it("should fill inputs with employee data", async () => {
        const employeeData = {
            id: "124455",
            firstname: "Luka",
            lastname: "Banovic",
            position: "Software Engineer",
            email: "luka@mail.com",
            address: "Serbia",
        };

        const RemixStub = createRemixStub([
            {
                path: "/employee/:employeeId/edit",
                Component: EditEmployee,
                loader: () => employeeData
            }
        ]);

        await act(() => {
            render(<RemixStub initialEntries={["/employee/:employeeId/edit"]} />);
        })

        await screen.findAllByText("Edit employee");

        expect(screen.getByTestId("firstname")).toHaveValue("Luka");
        expect(screen.getByTestId("lastname")).toHaveValue("Banovic");
        expect(screen.getByTestId("position")).toHaveValue("Software Engineer");
        expect(screen.getByTestId("email")).toHaveValue("luka@mail.com");
        expect(screen.getByTestId("address")).toHaveValue("Serbia");

    });
});