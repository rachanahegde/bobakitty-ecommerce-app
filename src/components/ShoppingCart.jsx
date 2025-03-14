import emptyCartIcon from "../assets/icons/empty_cart.png";
import fullCartIcon from "../assets/icons/full_cart.png";

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
      {/* Shopping Cart Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] p-6 rounded-lg shadow-xl relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-dark-purple font-bold text-lg"
              onClick={() => setIsCartOpen(false)}
            >
              ✖
            </button>

            {/* Cart Header */}
            <h2 className="text-xl font-bold text-medium-pink mb-4">
              Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
            </h2>

            {/* Cart Items */}
            <div className="max-h-60 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-dark-purple">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-md"
                    />
                    <div className="flex flex-col">
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
                      className="text-red-500 text-sm font-bold"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Subtotal & Checkout */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span className="font-bold">Subtotal:</span>
                <span>£{subtotal}</span>
              </div>
              <button className="w-full bg-medium-pink text-white py-2 font-bold rounded-md">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
