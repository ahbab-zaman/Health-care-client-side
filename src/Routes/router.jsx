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
import UpdateModal from "../Components/UpdateModal/UpdateModal";
import SellerRoute from "./SellerRoute";
import UserHistory from "../SharedFiles/UserLayout/UserHistory";

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
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome></AdminHome>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: <UpdateModal></UpdateModal>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/singleCategory/${[params.id]}`),
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
        element: (
          <PrivateRoute>
            <AdminRoute>
              <PaymentManagement></PaymentManagement>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // Seller routes
      {
        path: "sellerHome",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <SellerHome></SellerHome>
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageMedicine",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <ManageMedicine></ManageMedicine>
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payHistory",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <PaymentHistory></PaymentHistory>
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "advertisement",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <Advertisement></Advertisement>
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      // User routes
      {
        path: "userHistory",
        element: <UserHistory></UserHistory>,
      },
    ],
  },
]);

export default router;
