import Logo from "./LogoBlack.js";

function Footer() {
  return (
    <div className="bg-white flex flex-row font-light border-black border-t-2 justify-evenly relative z-50 p-5">
      <div className=" justify-center">
        <Logo />
      </div>
      <div className="flex flex-col gap-2 justify-center justify-items-start">
        <a href="/" className="hover:underline">
          Hjem
        </a>
        <a href="/gallery" className="hover:underline">
          Galleri
        </a>
        <a href="/about" className="hover:underline">
          Om Oss
        </a>
        <a href="/brands" className="hover:underline">
          Merker
        </a>
      </div>
      <div className="grid grid-col-1 gap-2">
        <h2 className="text-xl ">Kontakt Oss</h2>
        <div>
          <img></img> {/*  Bilde av telefon */}
          <p>990 20 149</p>
        </div>
        <div>
          <img></img> {/*  Bilde av brev  */}
          <p>apo.afro@online.no</p>
        </div>
        <div>
          <img></img> {/*  Bilde av hus */}
          <p>Torget 1A, 3210 Sandefjord</p>
        </div>
      </div>
      <div className="Sosiale medier">
        <p className="text-xl">Våre sosiale medier</p>
        <a href="https://www.instagram.com/apollon_afrodite/">
          <img src="" alt="instagram" className=""></img>
        </a>
          <logoInstagram className="bg-purple-100"/>
        <a href="https://www.facebook.com/apollonafrodite">
          s
        </a>
      </div>
    </div>
  );
}
export default Footer;
