import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

// Component to conditionally render Navbar
const Layout = ({
  children,
  isCartOpen,
  setIsCartOpen,
  isCheckoutPage,
  cart,
}) => {
  return (
    <div className="min-h-screen bg-dark-purple">
      {!isCheckoutPage && <Navbar setIsCartOpen={setIsCartOpen} cart={cart} />}
      {children}
      {!isCheckoutPage && <Footer />}
    </div>
  );
};

function App() {
  const [cart, setCart] = useState([]); // Store cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // Control cart visibility

  return (
    <Router>
      {/* Move useLocation inside Router */}
      <AppContent
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </Router>
  );
}

// New component inside Router to fix useLocation issue
const AppContent = ({ cart, setCart, isCartOpen, setIsCartOpen }) => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout"; // Check if on checkout

  return (
    <Layout
      isCartOpen={isCartOpen}
      setIsCartOpen={setIsCartOpen}
      isCheckoutPage={isCheckoutPage}
      cart={cart}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        {/* Pass cart state to Shop page */}
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

        {/* Pass cart state to Checkout page */}
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>

      {/* Hide shopping cart overlay on Checkout Page */}
      {!isCheckoutPage && (
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
