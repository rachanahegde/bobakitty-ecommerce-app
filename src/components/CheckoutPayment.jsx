import visaIcon from "../assets/icons/visa.png";
import amexIcon from "../assets/icons/amex.png";
import mastercardIcon from "../assets/icons/mastercard.png";
import angleLeft from "../assets/icons/angle-left.png";

const CheckoutPayment = ({
  email,
  shippingInfo,
  shippingMethod,
  billingSameAsShipping,
  setBillingSameAsShipping,
  billingInfo,
  setBillingInfo,
  paymentDetails,
  setPaymentDetails,
  setStep,
}) => {
  const handleInputChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-pacifico text-light-pink">Bobakitty Café</h1>
      <p className="text-lg font-montserrat text-gray-500">
        Customer &gt; Shipping &gt;{" "}
        <span className="font-bold text-dark-purple">Payment</span> &gt; Review
      </p>

      <div className="space-y-4 border-b pb-4">
        <div className="flex flex-row space-x-4">
          <p className="text-md font-montserrat font-bold text-dark-purple w-31 md:w-[150px]">
            Contact
          </p>
          <p className="text-md font-montserrat">{email}</p>
        </div>
        <div className="flex flex-row space-x-8">
          <p className="text-md font-montserrat font-bold text-dark-purple w-27 md:w-[200px]">
            Ship to
          </p>
          <p className="text-md font-montserrat">
            {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postcode}
            , {shippingInfo.country}
          </p>
        </div>
        <div className="flex flex-row space-x-4 mb-4">
          <p className="text-md font-montserrat font-bold text-dark-purple">
            Shipping method
          </p>
          <p className="text-md font-montserrat">{shippingMethod}</p>
        </div>
      </div>

      <h1 className="text-xl font-montserrat font-bold text-dark-purple">
        Payment
      </h1>
      <p className="text-sm text-gray-500">
        All transactions are secure and encrypted.
      </p>

      <div className="border border-gray-300 p-4 rounded-md">
        <div className="flex justify-between items-center pb-4">
          <p className="text-md font-montserrat font-bold">Credit Card</p>
          <div className="flex space-x-2">
            <img src={visaIcon} alt="Visa" className="w-8" />
            <img src={mastercardIcon} alt="MasterCard" className="w-8" />
            <img src={amexIcon} alt="Amex" className="w-8" />
          </div>
        </div>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={handlePaymentChange}
          className="w-full border border-gray-300 rounded-md p-3 font-montserrat text-sm md:text-md"
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiration Date (MM/YY)"
            value={paymentDetails.expiryDate}
            onChange={handlePaymentChange}
            className="w-full border border-gray-300 rounded-md p-3 font-montserrat text-sm md:text-md"
          />
          <input
            type="text"
            name="securityCode"
            placeholder="Security Code"
            value={paymentDetails.securityCode}
            onChange={handlePaymentChange}
            className="w-full border border-gray-300 rounded-md p-3 font-montserrat text-sm md:text-md"
          />
        </div>
        <input
          type="text"
          name="cardName"
          placeholder="Name on Card"
          value={paymentDetails.cardName}
          onChange={handlePaymentChange}
          className="w-full border border-gray-300 rounded-md p-3 font-montserrat mt-4 text-sm md:text-md"
        />
      </div>

      <h1 className="text-xl font-montserrat font-bold text-dark-purple">
        Billing Address
      </h1>
      <p className="text-sm text-gray-500 font-montserrat">
        Select the address that matches your card or payment method.
      </p>
      <div className="space-y-2">
        <label className="flex items-center font-montserrat font-semibold">
          <input
            type="radio"
            name="billingAddressOption"
            checked={billingSameAsShipping}
            onChange={() => setBillingSameAsShipping(true)}
            className="mr-2"
          />
          Same as shipping address
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="billingAddressOption"
            checked={!billingSameAsShipping}
            onChange={() => setBillingSameAsShipping(false)}
            className="mr-2"
          />
          Use a different billing address
        </label>
      </div>

      {!billingSameAsShipping && (
        <div className="mt-4 border border-gray-300 p-4 rounded-md space-y-4">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={billingInfo.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-3 font-montserrat"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={billingInfo.city}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-3 font-montserrat"
          />
          <input
            type="text"
            name="postcode"
            placeholder="Postcode"
            value={billingInfo.postcode}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-3 font-montserrat"
          />
        </div>
      )}

      <div className="flex justify-between space-x-8 md:space-x-0">
        <div className="flex items-center md:space-x-1">
          <img src={angleLeft} className="w-[24px] md:w-[30px]" alt="" />
          <button
            onClick={() => setStep(2)}
            className="text-dark-purple text-sm md:text-md font-semibold font-montserrat cursor-pointer"
          >
            Return to Shipping
          </button>
        </div>

        <button
          onClick={() => setStep(4)}
          className="text-center font-montserrat bg-light-pink px-2 text-white py-2 md:py-3 text-sm md:text-md font-bold rounded-md hover:bg-medium-pink transition md:px-4"
        >
          Review Order
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">You won't be charged yet.</p>
    </div>
  );
};

export default CheckoutPayment;
