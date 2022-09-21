import Logo from "./LogoWhite.js";
import { NavLink } from "react-router-dom";
import { useState } from 'react';

//IMAGES
import bootsgallery1 from '../images/boots-gallery1.jpeg';

  // className={yourItem === value ? 'your-class' : 'or-default-to'}

function NavBar() {


  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const Links = [
      { name: "Hjem", link: "/Apollon-Afrodite/" },
      { name: "Om Oss", link: "/Apollon-Afrodite/about" },
      { name: "Galleri", link: "/Apollon-Afrodite/gallery" },
      { name: "Merker", link: "/Apollon-Afrodite/brands" },
  ]

  return (
      <nav className={" text-white " + (isNavExpanded ? "md:bg-gradient-to-b md:from-black md:via-black md:to-transparent bg-black" : "bg-gradient-to-b from-black via-black to-transparent")}>
              <img
                  src={bootsgallery1}
                  alt="Unisa boots"
                  className=" absolute -z-50 w-screen object-bottom object-cover md:h-[1000px]"
              ></img>
          <div className={"flex md:flex-row flex-col justify-between h-36 relative top-[3rem] md:top-0 " }>
              <div className="flex gap-2 items-center left-9 relative ">
                  <Logo className="absolute" />
                  <p>10 - 18 (16)</p>
              </div>
              <button onClick={() => setIsNavExpanded(!isNavExpanded)} className="md:hidden absolute right-20 top-2 ">
                  <ion-icon name={isNavExpanded ? 'close-outline' : 'menu-outline'} size="large"></ion-icon>
              </button>
              <div className={'text-md md:flex md:flex-row flex flex-col items-center justify-between ' + (isNavExpanded ? "bg-gradient-to-b from-black via-black drop-shadow-xl gap-4 relative p-5 pb-44" : ' hidden')}>

                  {Links.map((link) => (
                          <NavLink
                              onClick={() => setIsNavExpanded(false)}
                              to={link.link}
                              className={({ isActive }) =>
                                  isActive
                                      ? " mx-2 w-24 border-2 border-white text-center rounded-full"
                                      : " mx-2 w-24 border-2 border-transparent text-center hover:transition duration-100 hover:border-b-white"
                              }
                          >
                              {link.name}
                          </NavLink>
                  ))}
              </div>
              {/* consider fixing jitter that occurs when cursor is on the edge of the element */}
          </div>
      </nav>
  )

}
export default NavBar;
