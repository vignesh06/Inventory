import {withRouter} from "react-router-dom";
import Dashboard from "./Views/DashBoard/Dashboard.js";
import CreateUser from "./Views/User/CreateUser.js";
import users from "./Views/User/Users.js";
import Updateuser from "./Views/User/UpdateUser.js";
import CreateProduct from "./Views/Product/CreateProduct.js";
import UpdateProduct from "./Views/Product/UpdateProduct.js";
import Products from "./Views/Product/Products.js";


const ApplicationRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/createuser",
    component: CreateUser,
    layout: "/admin",
  },
  {
    path: "/createproduct",
    component: CreateProduct,
    layout: "/admin",
  },
  {
    path: "/products",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/product/:id",
    component: UpdateProduct,
    layout: "/admin",
  },
  {
    path: "/users",
    component: users,
    layout: "/admin",
  },
  {
    path: "/user/:id",
    component: Updateuser,
    layout: "/admin",
  }
];
export default ApplicationRoutes;
