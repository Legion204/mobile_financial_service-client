import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Registration></Registration>
        },
        {
            path:"/login",
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;