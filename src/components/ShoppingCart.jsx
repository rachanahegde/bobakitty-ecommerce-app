import emptyCartIcon from "../assets/icons/empty_cart.png";
import fullCartIcon from "../assets/icons/full_cart.png";
import { Link } from "react-router-dom"; // Import Link for navigation

const ShoppingCart = ({ cart, setCart, isCartOpen, setIsCartOpen }) => {
  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate subtotal cost
  const subtotal = cart
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to increase product quantity in the cart
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease product quantity in the cart
  const decreaseQuantity = (productId) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  };

  return (
    <>
      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed right-0 top-20 w-[400px] bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Cart Header Section */}
        <div className="bg-light-pink absolute top-0 left-0 w-full px-6 py-8">
          {/* Close Button */}
          <button
            className="absolute top-6 right-8 text-white text-lg font-bold"
            onClick={() => setIsCartOpen(false)}
          >
            ✖
          </button>

          {/* Cart Header */}
          <h2 className="text-md font-montserrat font-bold text-white uppercase text-center">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </h2>
        </div>

        {/* Cart Items */}
        <div className="mt-22 max-h-85 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <p className="text-dark-purple font-montserrat font-bold text-center">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-row gap-x-4 items-center mb-6 bg-light-pink/25 rounded-lg w-[340px] py-6 px-6 relative"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-md"
                />
                <div className="flex flex-col font-montserrat">
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-sm">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-light-pink text-white rounded"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-medium-pink text-white rounded"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-600 text-sm font-bold font-montserrat absolute top-20 left-60"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Subtotal & Checkout */}
        {cart.length > 0 && (
          <div className="pt-8 font-montserrat bg-light-pink w-full absolute right-0 px-10 py-10 rounded-b-lg">
            <div className="flex flex-col gap-y-4 items-center">
              <span className="font-extrabold uppercase text-lg text-black">
                Subtotal
              </span>
              <p className="font-bold text-3xl mb-6 text-black">£{subtotal}</p>
            </div>

            {/* Link to Checkout Page */}
            <Link
              to="/checkout"
              className="block text-center w-full bg-white text-dark-purple py-3 text-md font-extrabold rounded-3xl font-montserrat uppercase hover:bg-medium-pink mt-4"
            >
              Go to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
