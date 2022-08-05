import Logo from './Logo.js';
import OpenHeader from './OpenHeader.js';

export default function Header() {
    return (
    <header className=" text-white border-b-2 border-black">
    <div className="flex justify-between items-center p-5">
        <div>
          <Logo /> // Consider making logo into link to '/' or home page
        </div>
        <div>
          <OpenHeader />
        </div>
        <div className="block underline">
            <div className="p-4">Om oss</div>
            <div className="p-4">Galleri</div>
        </div>
    </div>
  </header>
    )
}