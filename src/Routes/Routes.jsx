import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Error from "../Pages/Error/Error";
import Home from "../Container/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path: "/create",
          element:<CreateAccount></CreateAccount>,
        },
    ]
    },
  ]);

