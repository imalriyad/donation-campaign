import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics";
import DonationDetails from "../Pages/Donation/DonationDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donationdetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("/public/data.json"),
      },
    ],
  },
]);

export default router;
