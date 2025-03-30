import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

import "./index.css";

// Layout Component with conditional Navbar and Footer
const Layout = ({ children, showNavbarFooter, cart, setIsCartOpen }) => (
  <div className="min-h-screen bg-dark-purple">
    {showNavbarFooter && <Navbar setIsCartOpen={setIsCartOpen} cart={cart} />}
    {children}
    {showNavbarFooter && <Footer />}
  </div>
);

function App() {
  const [cart, setCart] = useState([]); // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart sidebar toggle

  return (
    <Router>
      <AppRoutes
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </Router>
  );
}

// Handles routing and logic tied to location
const AppRoutes = ({ cart, setCart, isCartOpen, setIsCartOpen }) => {
  const location = useLocation();
  const isCheckout = location.pathname === "/checkout";
  const showNavbarFooter = !isCheckout;

  return (
    <Layout
      cart={cart}
      setIsCartOpen={setIsCartOpen}
      showNavbarFooter={showNavbarFooter}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/shop"
          element={
            <Shop
              cart={cart}
              setCart={setCart}
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart} // Reset cart after order is placed
              setIsCartOpen={setIsCartOpen} // Close cart after order is placed
            />
          }
        />
      </Routes>

      {/* Cart overlay, hidden on checkout page */}
      {showNavbarFooter && (
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
      )}
    </Layout>
  );
};

export default App;
