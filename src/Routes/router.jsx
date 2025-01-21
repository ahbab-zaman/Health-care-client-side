import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Layouts/Home/Home";
import Table from "../Components/Table/Table";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Shop from "../Layouts/Shop/Shop";
import Cart from "../Layouts/Cart/Cart";
import Payment from "../Layouts/Cart/Payment";
import Invoice from "../Pages/Invoice/Invoice";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AdminHome from "../SharedFiles/AdminLayout/AdminHome";
import ManageUsers from "../SharedFiles/AdminLayout/ManageUsers";
import ManageCategory from "../SharedFiles/AdminLayout/ManageCategory";
import PrivateRoute from "./PrivateRoute";
import PaymentManagement from "../SharedFiles/AdminLayout/PaymentManagement";
import ManageMedicine from "../SharedFiles/SellerLayout/ManageMedicine";
import SellerHome from "../SharedFiles/SellerLayout/SellerHome";
import PaymentHistory from "../SharedFiles/SellerLayout/PaymentHistory";
import Advertisement from "../SharedFiles/SellerLayout/Advertisement";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/list/:category",
        element: <Table></Table>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/invoice",
    element: <Invoice></Invoice>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // Admin routes
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageCategory",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageCategory></ManageCategory>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "paymentManage",
        element: <PaymentManagement></PaymentManagement>,
      },
      // Seller routes
      {
        path: "sellerHome",
        element: <SellerHome></SellerHome>,
      },
      {
        path: "manageMedicine",
        element: <ManageMedicine></ManageMedicine>,
      },
      {
        path: "payHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "advertisement",
        element: <Advertisement></Advertisement>,
      },
      // User routes
      {
        path: "userHistory",
      },
    ],
  },
]);

export default router;
