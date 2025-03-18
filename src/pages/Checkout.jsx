import { useState } from "react";
import { Link } from "react-router-dom";
import angleLeft from "../assets/icons/angle-left.png";
import CheckoutInformation from "../components/CheckoutInformation";
import CheckoutShipping from "../components/CheckoutShipping";
import OrderSummary from "../components/OrderSummary";

const Checkout = ({ cart }) => {
  // State for user input (Step 1: Information)
  const [step, setStep] = useState(1); // Step 1 = Information, Step 2 = Shipping
  const [email, setEmail] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postcode: "",
    phone: "",
  });

  const [shippingMethod, setShippingMethod] = useState("Royal Mail"); // Default method
  const shippingCosts = {
    "Royal Mail": 3.94,
    "DHL Next Working Day": 10.0,
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const tax = (subtotal * 0.2).toFixed(2); // 20% tax
  const shippingCost = subtotal > 20 ? 0 : shippingCosts[shippingMethod]; // Free shipping over £20
  const total = (subtotal + shippingCost).toFixed(2); // Total (including shipping)

  // Handle input changes
  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8">
        {/* Left Column - Checkout Form */}

        <div className="space-y-6">
          {/* Bobakitty Café Logo */}
          <h1 className="text-3xl font-pacifico text-light-pink">
            Bobakitty Café
          </h1>

          {/* Checkout Steps */}
          <p className="text-lg font-montserrat text-gray-500">
            <span className="font-bold text-dark-purple">Customer</span> &gt;
            Shipping &gt; Payment &gt; Review
          </p>

          {/* Contact Section */}
          <h1 className="text-xl font-montserrat font-bold text-dark-purple">
            Contact
          </h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-light-pink font-montserrat"
          />

          {/* Shipping Address */}
          <h1 className="text-xl font-montserrat font-bold text-dark-purple">
            Shipping Address
          </h1>

          <div className="grid grid-cols-1 gap-y-4 font-montserrat">
            {/* Country Dropdown */}
            <select
              name="country"
              value={shippingInfo.country}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-light-pink"
            >
              <option value="">Select Country/Region</option>
              <option value="UK">United Kingdom</option>
              <option value="USA">United States</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
            </select>

            <div className="grid grid-cols-2 gap-4 font-montserrat">
              {/* First & Last Name */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={shippingInfo.firstName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3 font-montserrat"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={shippingInfo.lastName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3 font-montserrat"
              />
            </div>
          </div>

          {/* Address Fields */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-3 font-montserrat"
          />
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, Suite, etc. (Optional)"
            value={shippingInfo.apartment}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-3 font-montserrat"
          />

          {/* City & Postcode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-montserrat">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="text"
              name="postcode"
              placeholder="Postcode"
              value={shippingInfo.postcode}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          {/* Phone Number */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={shippingInfo.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-3 font-montserrat"
          />

          <div className="flex flex-row gap-x-36">
            {/* Return to shop link */}
            <div className="flex items-center space-x-1">
              <img src={angleLeft} className="w-[30px]" alt="" />
              <Link
                to="/shop"
                className="text-dark-purple text-md font-semibold font-montserrat"
              >
                Return to Shop
              </Link>
            </div>

            {/* Continue Button */}
            <Link
              to="/shipping"
              className="text-center font-montserrat bg-light-pink text-white py-3 text-md font-bold rounded-md hover:bg-medium-pink transition px-4"
            >
              Continue to Shipping
            </Link>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white border border-gray-300 rounded-md p-6">
          <h2 className="text-xl font-montserrat font-bold text-dark-purple mb-6">
            Order Summary
          </h2>

          {/* Product List */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between pb-4"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md"
                />

                {/* Product Info */}
                <div className="flex-1 ml-4">
                  <p className="text-md font-bold">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>

                {/* Product Total Price */}
                <p className="text-md font-bold">
                  £{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="flex justify-between font-montserrat mt-6">
            <span className="text-md font-bold">
              Subtotal ({cart.length} items)
            </span>
            <span className="text-md font-bold">£{subtotal.toFixed(2)}</span>
          </div>

          {/* Shipping Info */}
          <div className="flex justify-between font-montserrat mt-2">
            <span className="text-md">Shipping</span>
            <span className="text-md">Calculated at next step</span>
          </div>

          {/* Total Cost */}
          <div className="flex justify-between font-montserrat text-lg font-bold mt-4">
            <span>Total</span>
            <span>GBP £{total}</span>
          </div>

          {/* Tax Info */}
          <p className="text-sm text-gray-500 mt-1">
            Including £{tax} in taxes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
