import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
  ScrollRestoration,
} from '@remix-run/react';
import { Sidebar } from "@app/components";
import styles from "./styles/main.css";
import { IEmployee } from 'packages/components/src/lib/types/employee';
import EmployeeClient from "packages/components/src/lib/client/employee";
import axios from "axios"

export const meta: MetaFunction = () => [
  {
    title: 'New Remix App',
  },
];

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
]

export async function loader() {
  try {
    const employees = await EmployeeClient.findAll();
    return employees;
  } catch (err) {
    console.error("Failed to fetch data", err);
    return null;
  }
}

export default function App() {
  const employees: IEmployee[] = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Sidebar employees={employees}/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
