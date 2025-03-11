import { Link } from "react-router-dom";
import logo from "../assets/icons/boba_kitty_main_icon.png";

const Navbar = () => {
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
        <div className="space-x-6 text-sm font-montserrat font-bold text-light-purple">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
