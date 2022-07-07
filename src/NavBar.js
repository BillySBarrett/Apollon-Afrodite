import Logo from './Logo.js';
import OpenHeader from './OpenHeader.js';

function NavBar(){
    return (
        <header className=" text-black border-b-2 border-black">
        <div className="flex justify-between items-center p-5">
            <div className="flex items-center gap-6">
              <Logo />
              <OpenHeader />
            </div>
            <div>
            </div>
            <div className="">
                <a href="/about" className="p-4">Om oss</a>
                <a href="/gallery" className="p-4">Galleri</a>
                <a href="/" className="p-4">Hjem</a>
                <hr className="border-black"></hr>
            </div>
        </div>
      </header>
    )
}
export default NavBar;