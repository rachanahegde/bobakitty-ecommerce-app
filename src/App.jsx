import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"; // Import useState
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import ShoppingCart from "./components/ShoppingCart"; // Import ShoppingCart component
import "./index.css";

function App() {
  const [cart, setCart] = useState([]); // Store cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // Control cart visibility

  return (
    <Router>
      <div className="min-h-screen bg-dark-purple">
        {/* Pass setIsCartOpen to Navbar so it can open the cart */}
        <Navbar setIsCartOpen={setIsCartOpen} />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />

          {/* Pass cart state to Shop so it can add products to cart */}
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

          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>

        {/* Global Shopping Cart Overlay */}
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
