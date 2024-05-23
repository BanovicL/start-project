import styles from "./sidebar.module.css";
import { Link, NavLink } from "@remix-run/react";

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <h2 className="sidebar-title">Employees</h2>
            
            <Link className="cta-button" to={"/new-employee"}>New employee</Link>

            <ul className="employee-list">
                <li><NavLink to={"/employee/1"}>Marko Markovic</NavLink></li>
            </ul>

        </nav>
    )
}