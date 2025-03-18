import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutInformation from "../components/CheckoutInformation";
import OrderSummary from "../components/OrderSummary";

const Checkout = ({ cart }) => {
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8">
        {/* Left Column - Checkout Form */}
        <CheckoutInformation
          email={email}
          setEmail={setEmail}
          shippingInfo={shippingInfo}
          setShippingInfo={setShippingInfo}
        />
        {/* Right Column - Order Summary */}
        <OrderSummary cart={cart} />
      </div>
    </div>
  );
};

export default Checkout;
