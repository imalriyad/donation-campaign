import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";

const MainLayout = () => {
  const { pathname } = useLocation();
  pathname === "/"
    ? (document.title = "Donation Campaign -Home")
    : (document.title = "Donation Campaign" + pathname.replace("/", "-"));

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
