import { useCallback, useEffect, useState, useMemo } from "react";
import CheckoutInformation from "../components/CheckoutInformation";
import CheckoutShipping from "../components/CheckoutShipping";
import CheckoutPayment from "../components/CheckoutPayment";
import OrderSummary from "../components/OrderSummary";
import CheckoutReview from "../components/CheckoutReview";

const Checkout = ({ cart, setCart, setIsCartOpen }) => {
  const [step, setStep] = useState(1); // 1 = Information, 2 = Shipping, 3 = Payment, 4 = Review
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
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [billingInfo, setBillingInfo] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postcode: "",
    phone: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    cardName: "",
  });

  const shippingCosts = useMemo(
    () => ({
      "Royal Mail Tracked 24": 3.94,
      "DHL Next Working Day": 10.0,
    }),
    []
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const tax = (subtotal * 0.2).toFixed(2);

  const [shippingCost, setShippingCost] = useState(
    subtotal > 20 ? 0 : shippingCosts[shippingMethod]
  );

  // Function to calculate shipping cost
  const calculateShippingCost = useCallback(() => {
    return subtotal > 20 ? 0 : shippingCosts[shippingMethod] || 0;
  }, [subtotal, shippingMethod, shippingCosts]);

  useEffect(() => {
    if (!shippingCosts || !shippingMethod) return;

    // Trim to avoid key mismatches
    const trimmedShippingMethod = shippingMethod.trim();
    const newShippingCost =
      subtotal > 20 ? 0 : shippingCosts[trimmedShippingMethod] || 0;

    if (newShippingCost !== shippingCost) {
      setShippingCost(newShippingCost);
    }
  }, [shippingMethod, subtotal, shippingCosts, shippingCost]);

  // Make sure the total updates dynamically when the shipping method (and cost) is selected.
  const [total, setTotal] = useState((subtotal + shippingCost).toFixed(2));

  useEffect(() => {
    setTotal((parseFloat(subtotal) + parseFloat(shippingCost)).toFixed(2));
  }, [shippingCost, subtotal]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div
        className={`max-w-6xl mx-auto ${
          step === 4
            ? "w-full max-w-2xl"
            : "grid grid-cols-1 md:grid-cols-2 gap-12"
        } bg-white shadow-lg rounded-lg p-8`}
      >
        {step === 1 ? (
          <CheckoutInformation
            email={email}
            setEmail={setEmail}
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
            setStep={setStep}
          />
        ) : step === 2 ? (
          <CheckoutShipping
            email={email}
            shippingInfo={shippingInfo}
            shippingMethod={shippingMethod}
            setShippingMethod={setShippingMethod}
            shippingCosts={shippingCosts}
            setStep={setStep}
          />
        ) : step === 3 ? (
          <CheckoutPayment
            email={email}
            shippingInfo={shippingInfo}
            shippingMethod={shippingMethod}
            billingSameAsShipping={billingSameAsShipping}
            setBillingSameAsShipping={setBillingSameAsShipping}
            billingInfo={billingInfo}
            setBillingInfo={setBillingInfo}
            paymentDetails={paymentDetails}
            setPaymentDetails={setPaymentDetails}
            setStep={setStep}
          />
        ) : (
          <CheckoutReview
            email={email}
            shippingInfo={shippingInfo}
            billingSameAsShipping={billingSameAsShipping}
            billingInfo={billingInfo}
            shippingMethod={shippingMethod}
            paymentDetails={paymentDetails}
            cart={cart}
            shippingCost={shippingCost}
            tax={tax}
            total={total}
            setStep={setStep}
            setCart={setCart} // Reset cart after order is placed
            setIsCartOpen={setIsCartOpen} // Close cart after order is placed
          />
        )}
        {/* Show Order Summary only if NOT on the Review Page */}
        {step !== 4 && (
          <OrderSummary cart={cart} shippingCost={shippingCost} tax={tax} />
        )}
      </div>
    </div>
  );
};

export default Checkout;
