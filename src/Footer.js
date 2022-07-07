import Logo from './Logo.js';

function Footer() {
    return (      
    <footer className="bg-white flex flex-row items-center justify-between">
        <div className=" w-52  text-center justify-center">
        <Logo />
        <p>Torget 1A, 3210 Sandefjord</p>
        </div>
        <div>
        <div>
            <img alt="phone pic" className=""></img>
            <p>990 20 149</p>
        </div>
        <div>
            <img src="" alt="email" className=""></img>
            <p>apo.afro@online.no</p>
        </div>
        </div>
        <div>
        <p>Finn oss på våre sosiale medier:</p>
        <a href="link">
            <img src="" alt="insta" className=""></img>
        </a>
        <a href="link">
            <img src="" alt="facebook" className=""></img>
        </a>
        </div>
        
    </footer>
    )
}
export default Footer;