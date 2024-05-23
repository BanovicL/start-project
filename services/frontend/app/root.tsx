import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Sidebar } from "@app/components";
import styles from "./styles/main.css";

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

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Sidebar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
