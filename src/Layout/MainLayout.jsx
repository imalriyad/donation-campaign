import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Header/Navbar";

const MainLayout = () => {
  const { pathname } = useLocation();
  pathname === "/"
    ? (document.title = "Donation Campaign -Home")
    : (document.title = "Donation Campaign" + pathname.replace("/", "-"));
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>

      {navigation.state === "loading" ? (
        <div className="max-w-screen-lg text-center mx-auto">
          <span className="text-center mx-auto mt-[500px] text-black loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
};

export default MainLayout;
