import { createBrowserRouter } from "react-router-dom";
import Jobs from "./Jobs.tsx";
import { Navbar } from "../components/index.ts";
import Search from "./Search.tsx";
import App from "@/App.tsx";
import Login from "./Login.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "jobs",
    element: (
      <>
        <Navbar />
        <Jobs />
      </>
    ),
  },
  {
    path: "/search/:title",
    element: (
      <>
        <Navbar />
        <Search />
      </>
    ),
  },
  {
    path: "/job/:title",
    element: (
      <>
        <Navbar />
        <Jobs />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
]);
