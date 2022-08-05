import Logo from "./LogoWhite.js";
import OpenHeader from "./OpenHeader.js";
import { NavLink } from "react-router-dom";
import Wave from 'react-wavify';

function NavBar() {
  return (
    <nav className=" text-white bg-gradient-to-b from-black via-black to-transparent">
      <div className="flex justify-between items-center">
        <img
          src="./images/boots-gallery1.jpeg"
          alt="picture of Unisa boots"
          className=" absolute -z-50 w-screen object-cover h-[160vh]"
        ></img>
        <div className="flex items-center gap-6 py-3 px-20">
          <Logo />
          <p>10 - 18 (16)</p>
          <OpenHeader />
        </div>
        <div></div>
        <div className="w-2/5 text-md hidden md:flex lg:gap-10 gap-0 p-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "w-28 border-2 border-white text-center rounded-full"
                : "w-28 border-2 border-transparent text-center hover:transition duration-100 hover:border-b-white"
            }
          >
            Hjem
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "w-28 border-2 border-white text-center rounded-full"
                : "w-28 border-2 border-transparent text-center hover:transition duration-100 hover:border-b-white"
            }
          >
            Om Oss
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "w-28 border-2 border-white text-center rounded-full"
                : "w-28 border-2 border-transparent text-center hover:transition duration-100 hover:border-b-white"
            }
          >
            Galleri
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              isActive
                ? "w-28 border-2 border-white text-center rounded-full"
                : "w-28 border-2 border-transparent text-center hover:transition duration-100 hover:border-b-white"
            }
          >
            Merker
          </NavLink>
        </div>{" "}
        {/* consider fixing jitter that occurs when cursor is on the edge of the element */}
      </div>
    </nav>
  );
}
export default NavBar;
