import {
  createBrowserRouter,
} from "react-router-dom";
import BaseLayout from "../component/Layout/BaseLayout";
import Home from "../pages/home";
import Login from "../pages/login"
import ProductDetail from "../pages/productDetail";
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
      },      {
        path: '/sanpham/:slug',
        element: <ProductDetail/>
    }]
  },
]);  

export default router;
