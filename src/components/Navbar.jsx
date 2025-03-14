import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icons/boba_kitty_main_icon.png";
import cartIcon from "../assets/icons/empty_cart.png"; // Import cart icon

const Navbar = ({ setIsCartOpen }) => {
  // Accept setIsCartOpen as a prop
  const location = useLocation(); // Get the current route
  const isShopPage = location.pathname === "/shop"; // Check if on Shop page

  return (
    <nav className="w-full">
      <div className="container mx-auto flex justify-between items-center px-8 pt-4 lg:max-w-[1200px] lg:px-10 lg:py-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Bobakitty Café Logo" className="w-16" />
          <Link
            to="/"
            className="text-lg text-light-pink font-pacifico hover:text-medium-pink"
          >
            Bobakitty Café
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-6 text-sm font-montserrat font-bold text-light-purple">
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

          {/* Cart Icon & Text: Show on Shop Page */}
          {isShopPage && (
            <button
              onClick={() => setIsCartOpen(true)} // Opens the cart overlay
              className="flex items-center space-x-2 hover:text-medium-pink"
            >
              <img src={cartIcon} alt="Cart" className="w-5 h-5" />
              <span>Cart</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
