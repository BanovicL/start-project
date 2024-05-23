import {
    Link
} from "@remix-run/react"

export default function Employee() {
    return (
        <div className="page-content">

            <div className="employee">
                <h1>Employee details</h1>
                <div className="employee-data">
                    <div className="employee-info">
                        <label>Full name</label>
                        <p>Marko Markovic</p>
                    </div>
                    <div className="employee-info">
                        <label>Job position</label>
                        <p>Software Engineer</p>
                    </div>
                    <div className="employee-info">
                        <label>Email</label>
                        <p>marko@gmail.com</p>
                    </div>
                    <div className="employee-info">
                        <label>Adress</label>
                        <p>Belgrade</p>
                    </div>
                </div>

                <div className="buttons">
                    <Link className="cta-button" to={"/employee/1/edit"}>Edit</Link>
                    <Link className="outline-button" to={"/"}>Delete</Link>
                </div>
            </div>

        </div>
    )
}