import Logo from './Logo.js';
import OpenHeader from './OpenHeader.js';
import { NavLink } from 'react-router-dom'

function NavBar(){


  return (
      <nav className=" text-black border-b-2 border-black">
      <div className="flex justify-between items-center p-8">
          <div className="flex items-center gap-6">
            <Logo />
            <OpenHeader />
          </div>
          <div>
          </div>
          <div className=" w-96 text-md hidden md:flex gap-10">
            <NavLink to="/"         className={({isActive}) => isActive ? "w-28 border-2 border-black text-center bg-white rounded-full": "w-28 border-2 border-transparent text-center hover:transition duration-100 hover:border-b-black" }>Hjem</NavLink>
            <NavLink to="/about"    className={({isActive}) => isActive ? "w-28 border-2 border-black text-center bg-white rounded-full": "w-28 border-2 border-transparent text-center hover:transition duration-100 hover:border-b-black" }>Om Oss</NavLink>
            <NavLink to="/gallery"  className={({isActive}) => isActive ? "w-28 border-2 border-black text-center bg-white rounded-full": "w-28 border-2 border-transparent text-center hover:transition duration-100 hover:border-b-black" }>Galleri</NavLink>
          </div>  {/* consider fixing jitter that occurs when cursor is on the edge of the element */}
      </div>
    </nav>
    )
}
export default NavBar;