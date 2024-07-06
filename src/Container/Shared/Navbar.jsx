import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart, FaSearch, FaShoppingCart, FaUserAlt, FaWhatsappSquare } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  const handleSearchClick = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust this value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = (
    <>
      {[
        { to: "/", text: "SNEAKER STUDIO", key: "sneakerStudio" },
        { to: "/brands", text: "BRANDS", key: "brands" },
        { to: "/men", text: "MEN", key: "men" },
        { to: "/women", text: "WOMEN", key: "women" },
        { to: "/children", text: "CHILDREN", key: "children" },
        { to: "/accessories", text: "ACCESSORIES", key: "accessories" },
        { to: "/bata-club", text: "BATA CLUB", key: "bataClub" },
        { to: "/b-mag", text: "B-MAG", key: "bMag" },
        { to: "/bata-industrials", text: "BATA INDUSTRIALS", key: "bataIndustrials" },
      ].map((link) => (
        <Link
          key={link.key}
          to={link.to}
          onClick={() => handleLinkClick(link.key)}
          className={`relative font-bold ${
            activeLink === link.key ? "text-red-600" : ""
          } group`}
        >
          {link.text}
          <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
      ))}
    </>
  );

  return (
    <div className="">
      {/* lg navbar */}
      <div className="hidden lg:flex justify-between items-center p-5 pr-24 pl-24">
        <div className="flex items-center gap-3 text-sm">
          <CiLocationOn className="text-lg" />
          <p>FIND A STORE | CUSTOMER CARE: 09666200300</p>
        </div>
        <div className="text-lg font-bold">Logo</div>
        <div className="flex items-center gap-5">
          <FaUserAlt className="text-lg" />
          <FaRegHeart className="text-lg" />
          <FaWhatsappSquare className="text-lg" />
          <FaShoppingCart className="text-lg" />
          <div className="flex items-center border border-gray-300 rounded-md">
            <input type="search" className="p-2" placeholder="Search..." />
            <FaSearch className="text-lg p-2 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-20 flex justify-between items-center p-5 md:pl-14 md:pr-14 bg-white ${isSticky ? 'shadow-md' : ''}`}>
        <div className="flex items-center gap-5">
          <FiMenu className="text-lg cursor-pointer" onClick={handleMenuClick} />
          <FaSearch className="text-lg cursor-pointer" onClick={handleSearchClick} />
        </div>
        <div className="text-lg font-bold">Logo</div>
        <div className="flex items-center gap-5">
          <FaUserAlt className="text-lg" />
          <FaShoppingCart className="text-lg" />
        </div>
      </div>

      {/* Search field for mobile */}
      {searchOpen && (
        <div className="lg:hidden px-5 mt-16">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 p-2 rounded-md mt-2"
          />
        </div>
      )}

      {/* Off-canvas menu */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed left-0 top-0 bottom-0 w-3/4 max-w-sm bg-white p-5 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
          <div className="flex justify-between items-center mb-5">
            <div className="text-lg font-bold">Logo</div>
            <FiX className="text-lg cursor-pointer" onClick={handleMenuClick} />
          </div>
          <div className="flex flex-col gap-5">
            {navLinks}
            <div className="flex items-center gap-3 mt-5">
              <FaWhatsappSquare className="text-lg" />
              <p>My Wishlists</p>
            </div>
            <div className="flex items-center gap-3">
              <FaUserAlt className="text-lg" />
              <p>Find A Store | Customer care: 09666200300</p>
            </div>
          </div>
        </div>
      </div>

      {/* second navbar for lg devices */}
      <div className={`hidden lg:flex justify-center p-5 bg-gray-200 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg bg-white' : ''}`}>
        <div className="flex gap-10 items-center">
          {navLinks}
          {isSticky && (
            <div className="flex items-center gap-3">
              <FaSearch className="text-lg cursor-pointer" />
              <FaShoppingCart className="text-lg cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
