import {
    useNavigate,
    Form,
    useLoaderData,
    redirect
} from "@remix-run/react"
import EmployeeClient from "packages/components/src/lib/client/employee";
import { IEmployee } from "packages/components/src/lib/types/employee";

export async function loader({ params }: { params: any }) {
    const employee = await EmployeeClient.findOne(params.employeeId);
    return employee;
}

export async function action({ params, request }: { params: any, request: any }) {
    try {
        const formData = await request.formData();
        const newData: IEmployee = {...Object.fromEntries(formData), id: params.employeeId} as IEmployee;
        const updatedEmployee: IEmployee = await EmployeeClient.updateOne(newData);
        if(updatedEmployee){
            return redirect(`/employee/${updatedEmployee.id}`);
        }
    } catch(err) {
        console.error("Failed to update user.", err);
    }
}

export default function EditEmployee() {

    const navigate = useNavigate();
    const emloyee: IEmployee = useLoaderData();

    return (
        <div className="page-content">

            <Form method="POST" className="new-employee-form">

                <h1>Edit employee</h1>

                <div className="input-field">
                    <label htmlFor="firstName">First name</label>
                    <input data-testid="firstname" defaultValue={emloyee?.firstname} id="firstName" type="text" name="firstname" placeholder="First name..." />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last name</label>
                    <input data-testid="lastname" defaultValue={emloyee?.lastname} id="lastName" type="text" name="lastname" placeholder="Last name..." />
                </div>
                <div className="input-field">
                    <label htmlFor="position">Job position</label>
                    <input data-testid="position" defaultValue={emloyee?.position} id="position" type="text" name="position" placeholder="Position..." />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input data-testid="email" defaultValue={emloyee?.email} id="email" type="text" name="email" placeholder="Email..." />
                </div>
                <div className="input-field">
                    <label htmlFor="adress">Address</label>
                    <input data-testid="address" defaultValue={emloyee?.address} id="adress" type="text" name="address" placeholder="Address..." />
                </div>

                <div className="form-buttons">
                    <button className="cta-button">Save</button>
                    <button onClick={() => navigate(-1)} className="outline-button">Cancel</button>
                </div>

            </Form>

        </div>
    )
}