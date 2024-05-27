import styles from "./sidebar.module.css";
import { Link, NavLink } from "@remix-run/react";
import type { IEmployee } from "./types/employee";

export default function Sidebar({ employees } : { employees: IEmployee[] }) {
    return (
        <nav className="sidebar">
            <h2 className="sidebar-title"><NavLink to={"/"}>Employees</NavLink></h2>
            
            <Link className="cta-button" to={"/new-employee"}>New employee</Link>

            <ul className="employee-list">
                {
                    employees?.map((employee: IEmployee) => {
                        return <li><NavLink to={`/employee/${employee.id}`}>{employee.firstname} {employee.lastname}</NavLink></li>
                    })
                }
            </ul>

        </nav>
    )
}