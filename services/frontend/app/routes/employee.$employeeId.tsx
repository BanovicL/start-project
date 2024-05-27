import {
    Form,
    Link,
    useLoaderData
} from "@remix-run/react"
import EmployeeClient from "packages/components/src/lib/client/employee"
import { IEmployee } from "packages/components/src/lib/types/employee";

export async function loader({ params }: { params: any }) {
    const employee = await EmployeeClient.findOne(params.employeeId);
    return employee;
}

export default function Employee() {
    const employee: IEmployee = useLoaderData();
    return (
        <div className="page-content">

            <div className="employee">
                <h1>Employee details</h1>
                <div className="employee-data">
                    <div className="employee-info">
                        <label>Full name</label>
                        <p>{ employee.firstname } { employee.lastname }</p>
                    </div>
                    <div className="employee-info">
                        <label>Job position</label>
                        <p>{ employee.position }</p>
                    </div>
                    <div className="employee-info">
                        <label>Email</label>
                        <p>{ employee.email }</p>
                    </div>
                    <div className="employee-info">
                        <label>Adress</label>
                        <p>{ employee.address }</p>
                    </div>
                </div>

                <div className="buttons">
                    <Link className="cta-button" to={`/employee/${employee.id}/edit`}>Edit</Link>
                    <Link className="outline-button" to={`/employee/${employee.id}/delete`}>Delete</Link>
                </div>
            </div>

        </div>
    )
}