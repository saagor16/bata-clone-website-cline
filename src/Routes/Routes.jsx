import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Pages/Error/Error";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error />,
      children: [
        {
          path: "/",
         
        },
    ]
    },
  ]);

