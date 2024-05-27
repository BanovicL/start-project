import { 
    Form,
    useNavigate,
    redirect
} from "@remix-run/react"
import EmployeeClient from "packages/components/src/lib/client/employee";
import { IEmployee } from "packages/components/src/lib/types/employee";

export async function action({ request }: { request: any }) {
    const formData = await request.formData();
    const { id, firstname, lastname, position, email, address } = Object.fromEntries(formData) as IEmployee;
    const newEmployee: IEmployee = await EmployeeClient.create({ id, firstname, lastname, position, email, address });
    if(newEmployee) {
        return redirect(`/employee/${newEmployee.id}`);
    } else {
        return redirect("/");
    }
}

export default function NewEmployee() {

    const navigate = useNavigate();

    return (
        <div className="page-content">

            <Form method="POST" className="new-employee-form">

                <h1>Add employee</h1>

                <div className="input-field">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" type="text" name="firstname" placeholder="First name..." />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" type="text" name="lastname" placeholder="Last name..." />
                </div>
                <div className="input-field">
                    <label htmlFor="position">Job position</label>
                    <input id="position" type="text" name="position" placeholder="Position..." />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" placeholder="Email..." />
                </div>
                <div className="input-field">
                    <label htmlFor="adress">Address</label>
                    <input id="adress" type="text" name="address" placeholder="Address..." />
                </div>

                <div className="form-buttons">
                <button className="cta-button">Add employee</button>
                <button onClick={() => navigate(-1)} className="outline-button">Cancel</button>
                </div>

            </Form>

        </div>
    )
}