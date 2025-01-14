import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Layouts/Home/Home";
import Table from "../Components/Table/Table";

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
        // loader: ({ params }) =>
        //   fetch(`http://localhost:4000/medicine/${params.category}`),
      },
    ],
  },
]);

export default router;
