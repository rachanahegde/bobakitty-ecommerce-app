// Supports the Checkout.jsx page
// Contains the email input and shipping address form.
import angleLeft from "../assets/icons/angle-left.png";
import { Link } from "react-router-dom";

const CheckoutInformation = ({
  email,
  setEmail,
  shippingInfo,
  setShippingInfo,
  setStep,
}) => {
  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return (
      email.trim() !== "" &&
      shippingInfo.country.trim() !== "" &&
      shippingInfo.firstName.trim() !== "" &&
      shippingInfo.lastName.trim() !== "" &&
      shippingInfo.address.trim() !== "" &&
      shippingInfo.city.trim() !== "" &&
      shippingInfo.postcode.trim() !== "" &&
      shippingInfo.phone.trim() !== ""
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-pacifico text-light-pink">Bobakitty Café</h1>
      <p className="text-lg font-montserrat text-gray-500">
        <span className="font-bold text-dark-purple">Customer</span> &gt;
        Shipping &gt; Payment &gt; Review
      </p>
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
      <h1 className="text-xl font-montserrat font-bold text-dark-purple">
        Shipping Address
      </h1>
      <div className="grid grid-cols-1 gap-y-4 font-montserrat">
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
        <button
          onClick={() => isFormValid() && setStep(2)}
          disabled={!isFormValid()}
          className={`text-center font-montserrat py-3 text-md font-bold rounded-md transition px-4 ${
            isFormValid()
              ? "bg-light-pink text-white hover:bg-medium-pink"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue to Shipping
        </button>
      </div>
    </div>
  );
};
export default CheckoutInformation;
