import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = (
    <>
      <Link
        to="/"
        onClick={() => handleLinkClick("sneakerStudio")}
        className={`relative font-bold ${
          activeLink === "sneakerStudio" ? "text-red-600" : ""
        } group`}
      >
        SNEAKER STUDIO
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
      <Link
        to="/brands"
        onClick={() => handleLinkClick("brands")}
        className={`relative font-bold ${
          activeLink === "brands" ? "text-red-600" : ""
        } group`}
      >
        BRANDS
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
      <Link
        to="/men"
        onClick={() => handleLinkClick("men")}
        className={`relative font-bold ${
          activeLink === "men" ? "text-red-600" : ""
        } group`}
      >
        MEN
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
      <Link
        to="/women"
        onClick={() => handleLinkClick("women")}
        className={`relative font-bold ${
          activeLink === "women" ? "text-red-600" : ""
        } group`}
      >
        WOMEN
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
      <Link
        to="/children"
        onClick={() => handleLinkClick("children")}
        className={`relative font-bold ${
          activeLink === "children" ? "text-red-600" : ""
        } group`}
      >
        CHILDREN
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
      <Link
        to="/accessories"
        onClick={() => handleLinkClick("accessories")}
        className={`relative font-bold ${
          activeLink === "accessories" ? "text-red-600" : ""
        } group`}
      >
        ACCESSORIES
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
      <Link
        to="/bata-club"
        onClick={() => handleLinkClick("bataClub")}
        className={`relative font-bold ${
          activeLink === "bataClub" ? "text-red-600" : ""
        } group`}
      >
        BATA CLUB
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
      <Link
        to="/b-mag"
        onClick={() => handleLinkClick("bMag")}
        className={`relative font-bold ${
          activeLink === "bMag" ? "text-red-600" : ""
        } group`}
      >
        B-MAG
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
      <Link
        to="/bata-industrials"
        onClick={() => handleLinkClick("bataIndustrials")}
        className={`relative font-bold ${
          activeLink === "bataIndustrials" ? "text-red-600" : ""
        } group`}
      >
        BATA INDUSTRIALS
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </Link>
    </>
  );


  return (
    <div className="container mx-auto">
      {/* lg navbar */}
      <div className="hidden lg:flex justify-between p-5">
        <div className="flex gap-5">
          <p>icon1</p>
          <p>icon2</p>
        </div>
        <div>Logo</div>
        <div className="flex gap-5">
          <p>icon3</p>
          <p>icon4</p>
          <p>icon5</p>
          <p>icon6</p>
          <p>icon7</p>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="lg:hidden flex justify-between p-5">
        <div className="flex gap-5">
          <p>icon1</p>
          <p>icon2</p>
        </div>
        <div>Logo</div>
        <div className="flex gap-5">
          <p>icon3</p>
          <p>icon4</p>
        </div>
      </div>

      {/* second navbar for lg devices */}
      <div className="lg:flex hidden justify-center p-5 bg-gray-200">
        <div className="flex gap-10 justify-center">
          {navLinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
