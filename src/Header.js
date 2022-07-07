import Logo from './Logo.js';
import OpenHeader from './OpenHeader.js';

export default function Header() {
    return (
    <header className=" text-black border-b-2 border-black">
    <div className="flex justify-between items-center p-5">
        <div>
          <Logo />
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