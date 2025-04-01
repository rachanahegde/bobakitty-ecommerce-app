// Supports the Checkout.jsx page
// Displays email and shipping address summary.
// Allows users to select a shipping method.

import { Link } from "react-router-dom";
import angleLeft from "../assets/icons/angle-left.png";

const CheckoutShipping = ({
  email,
  shippingInfo,
  shippingMethod,
  setShippingMethod,
  shippingCosts,
  setStep,
}) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl lg:text-3xl font-pacifico text-light-pink">
        Bobakitty Café
      </h1>
      <p className="text-lg font-montserrat text-gray-500">
        Customer &gt;{" "}
        <span className="font-bold text-dark-purple">Shipping</span> &gt;
        Payment &gt; Review
      </p>
      <div className="flex flex-row space-x-6">
        <p className="text-md font-montserrat font-bold text-dark-purple min-w-[60px]">
          Contact
        </p>
        <p className="text-md font-montserrat">{email}</p>
      </div>

      <div className="flex flex-row space-x-6">
        <p className="text-md font-montserrat font-bold text-dark-purple min-w-[60px]">
          Ship to
        </p>
        <p className="text-md font-montserrat">
          {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postcode},
          {shippingInfo.country}
        </p>
      </div>

      <h1 className="text-xl text-dark-purple font-semibold font-montserrat">
        Shipping is free over £20
      </h1>

      <h1 className="text-xl font-montserrat font-bold text-dark-purple">
        Shipping Method
      </h1>
      <div className="space-y-4">
        {Object.keys(shippingCosts).map((method) => (
          <label
            key={method}
            className="flex items-center border border-gray-300 p-4 rounded-md cursor-pointer font-semibold"
          >
            <input
              type="radio"
              name="shippingMethod"
              value={method}
              checked={shippingMethod === method}
              onChange={(e) => setShippingMethod(e.target.value)}
              className="mr-3"
            />
            <span className="font-montserrat">
              {method} - £{shippingCosts[method].toFixed(2)}
            </span>
          </label>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex items-center space-x-1">
          <img src={angleLeft} className="w-[30px]" alt="" />
          <button
            onClick={() => setStep(1)}
            className="text-dark-purple text-md font-semibold font-montserrat cursor-pointer"
          >
            Return to Information
          </button>
        </div>

        <button
          onClick={() => setStep(3)}
          className="text-center font-montserrat bg-light-pink text-white py-3 text-md font-bold rounded-md hover:bg-medium-pink transition px-4"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutShipping;
