import { 
    Form,
    useNavigate
} from "@remix-run/react"

export default function NewEmployee() {

    const navigate = useNavigate();

    return (
        <div className="page-content">

            <Form className="new-employee-form">

                <h1>Add employee</h1>

                <div className="input-field">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" type="text" name="firstName" placeholder="First name..." />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" type="text" name="lastName" placeholder="Last name..." />
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