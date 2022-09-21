import Logo from "./LogoBlack.js";

function Footer() {
  return (
    <div className="bg-white flex md:flex-row flex-col md:gap-14 justify-center font-light border-black border-t-2 relative z-50 p-5">
      <div className=" flex justify-center">
        <Logo />
      </div>
      <div className="flex md:flex-col gap-2 justify-center justify-items-start">
        <a href="/Apollon-Afrodite/" className="hover:underline">
          Hjem
        </a>
        <a href="/Apollon-Afrodite/gallery" className="hover:underline">
          Galleri
        </a>
        <a href="/Apollon-Afrodite/about" className="hover:underline">
          Om Oss
        </a>
        <a href="/Apollon-Afrodite/brands" className="hover:underline">
          Merker
        </a>
      </div>
      <div className="Sosiale medier text-center items-center pt-5">
        <p className="text-xl font-bold">Våre sosiale medier</p>
        <div className="flex gap-10 justify-center p-4">
          <a href="https://www.instagram.com/apollon_afrodite/">
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </a>
          <a href="https://www.facebook.com/apollonafrodite">
            <ion-icon name="logo-facebook" size="large"></ion-icon>
          </a>
        </div>
      </div>
      <div className="grid grid-col-1 gap-2 text-center">
        <h2 className="text-xl font-bold ">Kontakt Oss</h2>
        <div>
          <p>Torget 1A, 3210 Sandefjord</p>
          <p>Tlf: 990 20 149</p>
          <p>E-post: apo.afro@online.no</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
