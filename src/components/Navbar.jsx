import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icons/boba_kitty_main_icon.png";
import emptyCartIcon from "../assets/icons/empty_cart.png";
import fullCartIcon from "../assets/icons/full_cart.png";
import hamburgerIcon from "../assets/icons/hamburger_icon.png";

const Navbar = ({ setIsCartOpen, cart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const isShopPage = location.pathname === "/shop"; // Check if on Shop page

  // To display the empty or full cart icon depending on items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartIcon = totalItems > 0 ? fullCartIcon : emptyCartIcon;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); // for clicking links

  return (
    <nav className="w-full z-50 relative">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 lg:max-w-[1200px]">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-8 md:w-14" />
          <Link
            to="/"
            onClick={closeMenu}
            className="text-lg text-light-pink font-pacifico hover:text-medium-pink"
          >
            Bobakitty Café
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-montserrat font-bold text-light-purple">
          <Link to="/" className="hover:text-medium-pink">
            Home
          </Link>
          <Link to="/menu" className="hover:text-medium-pink">
            Menu
          </Link>
          <Link to="/shop" className="hover:text-medium-pink">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-medium-pink">
            Contact
          </Link>

          {isShopPage && (
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center space-x-2 hover:text-medium-pink"
            >
              <div className="relative">
                <img src={cartIcon} alt="Cart" className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-medium-pink text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </button>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <img src={hamburgerIcon} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Full-Screen Slide-in Mobile Menu */}
      <div
        className={`fixed inset-0 bg-dark-purple transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col`}
      >
        {/* Mobile Menu Header with Close Button */}
        <div className="flex items-center px-6 py-4 border-b shadow-md mx-auto">
          <span className="text-xl font-pacifico text-light-pink">Menu</span>
          <button
            onClick={toggleMenu}
            className="text-lg font-bold text-light-purple absolute right-8"
          >
            ✕
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-10 text-xl font-montserrat font-bold text-light-purple">
          <Link to="/" onClick={closeMenu} className="hover:text-medium-pink">
            Home
          </Link>
          <Link
            to="/menu"
            onClick={closeMenu}
            className="hover:text-medium-pink"
          >
            Menu
          </Link>
          <Link
            to="/shop"
            onClick={closeMenu}
            className="hover:text-medium-pink"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="hover:text-medium-pink"
          >
            Contact
          </Link>

          {isShopPage && (
            <button
              onClick={() => {
                setIsCartOpen(true);
                closeMenu();
              }}
              className="flex items-center space-x-2 hover:text-medium-pink"
            >
              <img src={cartIcon} alt="Cart" className="w-5 h-5" />
              <span>Cart ({totalItems})</span>
            </button>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
