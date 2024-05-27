import EmployeeClient from "packages/components/src/lib/client/employee"
import { redirect } from "@remix-run/node";

export async function loader({ params }: { params: any }) {
    const response = await EmployeeClient.deleteOne(params.employeeId);
    return redirect("/");
}