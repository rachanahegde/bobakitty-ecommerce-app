import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutInformation from "../components/CheckoutInformation";
import CheckoutShipping from "../components/CheckoutShipping";
import OrderSummary from "../components/OrderSummary";

const Checkout = ({ cart }) => {
  const [step, setStep] = useState(1); // 1 = Information, 2 = Shipping, 3 = Payment
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

  const [shippingMethod, setShippingMethod] = useState("Royal Mail Tracked 24"); // Default method
  const shippingCosts = {
    "Royal Mail Tracked 24": 3.94,
    "DHL Next Working Day": 10.0,
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const tax = (subtotal * 0.2).toFixed(2);
  const shippingCost = subtotal > 20 ? 0 : shippingCosts[shippingMethod];
  const total = (subtotal + shippingCost).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8">
        {step === 1 ? (
          <CheckoutInformation
            email={email}
            setEmail={setEmail}
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
            setStep={setStep} // Pass setStep to change steps
          />
        ) : step === 2 ? (
          <CheckoutShipping
            email={email}
            shippingInfo={shippingInfo}
            shippingMethod={shippingMethod}
            setShippingMethod={setShippingMethod}
            shippingCosts={shippingCosts}
            setStep={setStep} // Pass setStep to change steps
          />
        ) : (
          <div className="text-center text-dark-purple text-lg font-montserrat">
            Payment Section Coming Soon...
          </div>
        )}
        <OrderSummary
          cart={cart}
          shippingCost={shippingCost}
          total={total}
          tax={tax}
        />
      </div>
    </div>
  );
};

export default Checkout;
