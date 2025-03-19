// This supports the Checkout.jsx page. It will contain: Customer Contact Information,
// Shipping Address, Billing Address (if different from shipping), Selected Shipping Method, Payment Method (last 4 digits of the card), Order Summary (Cart Items, Subtotal, Shipping, Taxes, and Total), Final Confirmation Button

import angleLeft from "../assets/icons/angle-left.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CheckoutReview = ({
  email,
  shippingInfo,
  billingSameAsShipping,
  billingInfo,
  shippingMethod,
  paymentDetails,
  cart,
  shippingCost,
  tax,
  total,
  setStep,
}) => {
  const navigate = useNavigate(); // ✅ Declare useNavigate at the top

  // Function to handle order placement
  const handlePlaceOrder = () => {
    navigate("/"); // Redirects to Home Page
  };
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-pacifico text-light-pink">Bobakitty Café</h1>
      <p className="text-lg font-montserrat text-gray-500">
        Customer &gt; Shipping &gt; Payment &gt;{" "}
        <span className="font-bold text-dark-purple">Review</span>
      </p>

      {/* Contact Information */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold text-dark-purple">Contact</h2>
        <p className="text-md font-montserrat">{email}</p>
      </div>

      {/* Shipping Address */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold text-dark-purple mb-2">
          Shipping Address
        </h2>
        <p className="text-md font-montserrat">
          {shippingInfo.firstName} {shippingInfo.lastName}
        </p>
        <p className="text-md font-montserrat">
          {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postcode},{" "}
          {shippingInfo.country}
        </p>
      </div>

      {/* Billing Address */}
      {!billingSameAsShipping && (
        <div className="border-b pb-4">
          <h2 className="text-xl font-bold text-dark-purple mb-2">
            Billing Address
          </h2>
          <p className="text-md font-montserrat">
            {billingInfo.firstName} {billingInfo.lastName}
          </p>
          <p className="text-md font-montserrat">
            {billingInfo.address}, {billingInfo.city}, {billingInfo.postcode},{" "}
            {billingInfo.country}
          </p>
        </div>
      )}

      {/* Shipping Method */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold text-dark-purple mb-2">
          Shipping Method
        </h2>
        <p className="text-md font-montserrat">{shippingMethod}</p>
      </div>

      {/* Payment Method */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold text-dark-purple mb-2">
          Payment Method
        </h2>
        <p className="text-md font-montserrat">
          Credit Card ending in{" "}
          <span className="font-bold">
            {paymentDetails.cardNumber.slice(-4)}
          </span>
        </p>
      </div>

      {/* Order Summary */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold text-dark-purple">Order Summary</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
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
          <span className="text-md font-bold">Subtotal</span>
          <span className="text-md font-bold">£{total}</span>
        </div>
        <div className="flex justify-between font-montserrat mt-2">
          <span className="text-md">Shipping</span>
          <span className="text-md">£{shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-montserrat text-lg font-bold mt-4">
          <span>Total</span>
          <span>GBP £{total}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Including £{tax} in taxes</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <div className="flex items-center space-x-1">
          <img src={angleLeft} className="w-[30px]" alt="" />
          <button
            onClick={() => setStep(3)}
            className="text-dark-purple text-md font-semibold font-montserrat cursor-pointer"
          >
            Return to Payment
          </button>
        </div>

        <button
          onClick={handlePlaceOrder} // Call function instead of using navigate directly in onClick
          className="text-center font-montserrat bg-light-pink text-white py-3 text-md font-bold rounded-md hover:bg-medium-pink transition px-4"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutReview;
