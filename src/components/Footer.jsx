// Import social media icons
import instagram from "../assets/icons/social_media/instagram.png";
import facebook from "../assets/icons/social_media/facebook.png";
import linkedin from "../assets/icons/social_media/linkedin.png";
import tiktok from "../assets/icons/social_media/tiktok.png";
import x_icon from "../assets/icons/social_media/x.png";

const Footer = () => {
  return (
    <footer className="bg-light-purple text-dark-purple py-8 font-montserrat font-semibold text-sm mt-4">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Social Media Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex space-x-6">
            <img src={instagram} className="w-8 h-8"></img>
            <img src={facebook} className="w-8 h-8"></img>
            <img src={linkedin} className="w-8 h-8"></img>
            <img src={tiktok} className="w-8 h-8"></img>
            <img src={x_icon} className="w-8 h-8"></img>
          </div>
        </div>

        {/* Right Column - Business Info */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-center md:text-right">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:info@bobakittycafe.com"
              className="hover:text-medium-pink transition"
            >
              info@bobakittycafe.com
            </a>
          </p>
          <p>Address: 123 Whisker Lane, Meowtown, CA 90210</p>
          <p>Phone: (123) 456-7890</p>
          <p>Mon - Fri: 10AM - 7PM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
