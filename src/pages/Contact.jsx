// Import images
import catCuddlesImg from "../assets/images/cats/cat_cuddles_2.jpg";
import catPettedImg from "../assets/images/cats/cat_petted.jpg";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });

    // Future: Store data in backend or send email
  };
  return (
    <div className="mt-6 text-center">
      <h1 className="text-2xl font-fredoka font-bold text-light-pink mb-8">
        Contact Us
      </h1>
      <div className="flex flex-cols-2 gap-x-10 max-w-5xl mx-auto mb-10">
        <img src={catPettedImg} className="w-2xs rounded-md shadow-md"></img>
        {/* Contact Us Form */}
        <div>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 shadow-md rounded-lg space-y-4"
            >
              {/* Name Field */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-light-pink font-montserrat"
              />

              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-light-pink font-montserrat"
              />

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-light-pink font-montserrat resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-light-pink text-white py-3 font-montserrat font-bold rounded-md hover:bg-medium-pink transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <h2 className="text-lg font-bold text-dark-purple font-montserrat">
                Thank You!
              </h2>
              <p className="text-md text-gray-500 font-montserrat mt-2">
                Your message has been sent successfully. We'll get back to you
                soon!
              </p>
            </div>
          )}
        </div>
      </div>

      <h1 className="text-2xl font-fredoka font-bold text-light-purple mb-8">
        Visit Us
      </h1>
      <h2 className="text-lg font-montserrat font-semibold text-light-purple mb-4">
        Phone Number: (123) 456-7890
      </h2>
      <h2 className="text-lg font-montserrat font-semibold text-light-purple mb-4">
        Address: 123 Whisker Lane, Meowtown, CA 90210
      </h2>
      <h2 className="text-lg font-montserrat font-semibold text-light-purple mb-12">
        Business Hours: Mon-Sun: 10 AM - 8 PM
      </h2>
      <img
        src={catCuddlesImg}
        className="w-2xl mx-auto mb-14 rounded-md shadow-md"
      ></img>
    </div>
  );
};

export default Contact;
