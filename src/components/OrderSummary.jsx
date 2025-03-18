// Supports the Checkout.jsx page
// Shows products in the cart, subtotal, shipping, and total cost.
// Updates dynamically when shipping method changes.
// It displays as a sidebar on the right throughout the checkout process

const OrderSummary = ({ cart }) => {
  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const tax = (subtotal * 0.2).toFixed(2);
  const total = subtotal.toFixed(2);
  return (
    <div className="bg-white border border-gray-300 rounded-md p-6">
      <h2 className="text-xl font-montserrat font-bold text-dark-purple mb-6">
        Order Summary
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between pb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md"
            />
            <div className="flex-1 ml-4">
              <p className="text-md font-bold">{item.name}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="text-md font-bold">
              £{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between font-montserrat mt-6">
        <span className="text-md font-bold">
          Subtotal ({cart.length} items)
        </span>
        <span className="text-md font-bold">£{subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-montserrat text-lg font-bold mt-4">
        <span>Total</span>
        <span>GBP £{total}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">Including £{tax} in taxes</p>
    </div>
  );
};
export default OrderSummary;
