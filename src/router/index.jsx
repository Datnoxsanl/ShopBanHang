import {
  createBrowserRouter,
} from "react-router-dom";
import BaseLayout from "../component/Layout/BaseLayout";
import Home from "../pages/home";
import Login from "../pages/login"
const router = createBrowserRouter([
  {
      path: "/",
      element: <BaseLayout/>,
      children: [{
          path: '/',
          element: <Home/>
      },
      {
          path: '/login',
          element: <Login/>
      }]
  },
]);  

export default router;
