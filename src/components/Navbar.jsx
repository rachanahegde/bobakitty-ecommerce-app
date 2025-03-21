import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icons/boba_kitty_main_icon.png";
import emptyCartIcon from "../assets/icons/empty_cart.png";
import fullCartIcon from "../assets/icons/full_cart.png";

const Navbar = ({ setIsCartOpen, cart }) => {
  // Accept setIsCartOpen as a prop
  const location = useLocation(); // Get the current route
  const isShopPage = location.pathname === "/shop"; // Check if on Shop page

  // To display the empty or full cart icon depending on items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartIcon = totalItems > 0 ? fullCartIcon : emptyCartIcon;

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

          {/* Display cart icon and number of items in cart on shop page */}
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
      </div>
    </nav>
  );
};

export default Navbar;
