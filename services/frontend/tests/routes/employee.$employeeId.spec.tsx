import { render, screen, fireEvent } from "@testing-library/react";
import { createRemixStub } from "@remix-run/testing";
import Employee from "services/frontend/app/routes/employee.$employeeId";
import EditEmployee from "services/frontend/app/routes/employee.$employeeId_.edit";
import { installGlobals } from "@remix-run/node";
import { act } from "react";
import '@testing-library/jest-dom';

installGlobals();

describe("Employee route tests", () => {
  it("should display employee Luka Banovic", async () => {
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
            path: "/employee/:employeeId",
            Component: Employee,
            loader: () => employeeData
        },
    ]);

    await act(() => {
        render(<RemixStub initialEntries={["/employee/124455"]} />);
    })

    await screen.findByTestId("employee-name");

    expect(screen.getByTestId("employee-name")).toHaveTextContent("Luka Banovic");
    expect(screen.getByTestId("employee-position")).toHaveTextContent("Software Engineer");
    expect(screen.getByTestId("employee-email")).toHaveTextContent("luka@mail.com");
    expect(screen.getByTestId("employee-address")).toHaveTextContent("Serbia");

  });
  it("should redirect to edit page after clicking edit button", async () => {
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
            path: "/employee/:employeeId",
            Component: Employee,
            loader: () => employeeData
        },
        {
            path: "/employee/:employeeId/edit",
            Component: EditEmployee
        }
    ])

    await act(() => {
        render(<RemixStub initialEntries={["/employee/124455"]} />);
    })

    await screen.findByText("Edit");

    fireEvent.click(screen.getByText("Edit"));

    await screen.findAllByText("Edit employee");
    expect(screen.getByText("Edit employee")).toBeTruthy();

  })
});