import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="mx-auto block w-full max-w-screen-2xl bg-white py-2 px-4 text-white lg:px-8 lg:py-2">
        <div>
          <div className="container mx-auto gap-4 flex items-center justify-between text-gray-900">
            <span>
              <img src="https://i.ibb.co/vxH0mdP/Logo.png" alt="" />
            </span>
            <ul className="items-center md:gap-8 flex font-medium">
              <NavLink to={"/"}>
                <li className="block p-1 font-sans md:text-lg  leading-normal ">
                  Home
                </li>
              </NavLink>

              <NavLink to={'/donation'}>
                <li className="block p-1 font-sans  leading-normal md:text-lg ">
                Donation
                </li>
              </NavLink>

              <NavLink to={'/statistics'}>
                {" "}
                <li className="block p-1 font-sans md:text-lg  leading-normal">
                  Statistics
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
