import PawPrint from "../components/PawPrint"; // Import paw print component

// Import images
import cat_with_boba from "../assets/images/cats/cat_with_boba.jpg";
import cat_cuddles from "../assets/images/cats/cat_cuddles.jpg";
import person_drinking_boba_1 from "../assets/images/person_drinking_boba_1.jpg";
import person_drinking_boba_2 from "../assets/images/person_drinking_boba_2.jpg";
import cartoon_boba_kitty from "../assets/icons/boba_kitty_2.png";

// Import featured drink images
import drink1 from "../assets/images/tea/milk_tea/taro_milk_tea.jpeg";
import drink2 from "../assets/images/tea/milk_tea/assam_milk_tea.jpeg";
import drink3 from "../assets/images/tea/specials/brown_sugar_tea.jpeg";
import drink4 from "../assets/images/tea/specials/strawberries_cream_boba.jpeg";
import drink5 from "../assets/images/tea/fruit_tea/lychee_fruit_tea.jpeg";
import drink6 from "../assets/images/tea/milk_tea/oolong_milk_tea.jpeg";

// Import right and left arrows
import right_arrow from "../assets/icons/angle-right.png";
import left_arrow from "../assets/icons/angle-left.png";

// Import Link
import { Link } from "react-router-dom";
// Import useEffect to create image slider for featured drinks section
import { useState, useEffect } from "react";

// Make list of drinks to feature
const drinks = [
  { id: 1, name: "Taro Milk Tea", image: drink1 },
  { id: 2, name: "Assam Milk Tea", image: drink2 },
  { id: 3, name: "Brown Sugar Boba", image: drink3 },
  { id: 4, name: "Strawberries & Cream", image: drink4 },
  { id: 5, name: "Lychee Fruit Tea", image: drink5 },
  { id: 6, name: "Oolong Milk Tea", image: drink6 },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically rotate drinks every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  // Move to the next set of drinks
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % drinks.length);
  };

  // Move to the previous set of drinks
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? drinks.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="mt-6 text-center relative">
      <h1 className="text-md sm:text-2xl font-fredoka font-bold text-light-pink max-w-2xs mx-auto sm:max-w-3xl md:max-w-xl">
        Sip, Purr, Relax: The Ultimate Bubble Tea & Cat Café Experience!
      </h1>
      {/* Animated paw prints */}
      <PawPrint />

      {/* Image Grid */}
      <div className="mt-10 max-w-xs md:max-w-2xl lg:max-w-3xl p-4 md:p-6 mx-auto rounded-2xl bg-white/25 backdrop-blur-lg shadow-xl border border-white/20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          <img
            src={person_drinking_boba_1}
            alt="Person drinking boba"
            className="rounded-lg shadow-md"
          />
          <div className="grid gap-y-4 md:gap-y-6">
            <img
              src={cat_with_boba}
              alt="Cat 1"
              className="rounded-lg shadow-md"
            />
            <img
              src={cat_cuddles}
              alt="Cat getting cuddles"
              className="rounded-lg shadow-md"
            />
          </div>
          <img
            src={person_drinking_boba_2}
            alt="Person drinking boba"
            className="hidden md:flex rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 md:mt-8 flex flex-row justify-center gap-6">
        <Link
          to="/shop"
          className="px-6 py-3 bg-gradient-to-r from-light-pink to-medium-pink text-dark-purple font-montserrat font-bold text-sm rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Shop Now
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-light-purple to-medium-purple text-dark-purple font-montserrat font-bold text-sm rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Book a Visit
        </Link>
      </div>

      {/* Featured Drinks */}
      <h1 className="text-xl md:text-2xl font-fredoka font-bold text-light-pink mt-8">
        Featured Drinks
      </h1>

      <div className="mt-8 md:mt-6">
        {/* Drink Cards with Left/Right Navigation */}
        <div className="relative w-full max-w-[320px] md:max-w-2xl lg:max-w-3xl mx-auto flex items-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-[-38px] md:left-[-40px] lg:left-[-50px] w-8 lg:w-10"
          >
            <img src={left_arrow} />
          </button>

          {/* Drinks Grid */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8 w-full">
            {drinks.slice(currentIndex, currentIndex + 3).map((drink) => (
              <div
                key={drink.id}
                className="flex flex-col items-center bg-white/30 backdrop-blur-lg shadow-lg pt-4 md:pt-6 pr-2 pl-2 rounded-xl"
              >
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-25 h-25 md:w-40 md:h-40 lg:w-45 lg:h-45 rounded-lg object-cover shadow-md"
                />
                <p className="mt-4 mb-2 text-xs md:text-sm font-montserrat font-semibold text-light-purple">
                  {drink.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-38px] md:right-[-42px] lg:right-[-50px] w-8 lg:w-10"
          >
            <img src={right_arrow} />
          </button>
        </div>
      </div>

      {/* View Menu Btn */}
      <div className="mt-10">
        <Link
          to="/menu"
          className="px-6 py-3 bg-gradient-to-r from-light-pink to-medium-pink text-dark-purple font-montserrat font-bold text-sm rounded-full shadow-md hover:scale-105 transition-transform"
        >
          View Menu
        </Link>
      </div>
      {/* About section */}
      <div className="mt-12 text-2xl font-fredoka font-bold text-light-pink pb-10">
        <h2 className="">About Bobakitty Café</h2>
        <div className="mt-6 w-3xl mx-auto items-center bg-white/25 backdrop-blur-lg shadow-lg pt-8 pr-6 pl-6 pb-6 rounded-xl">
          <p className="text-sm font-montserrat text-light-purple leading-6">
            Welcome to BobaKitty Café - where bubble tea meets whiskers and
            warmth! Sip on handcrafted boba, cuddle with our friendly rescue
            cats, and browse our adorable feline-themed merch in a cozy,
            purr-fectly relaxing space.
          </p>
          <p className="text-sm font-montserrat mt-4 text-light-purple leading-6">
            We proudly partner with local cat adoption organizations to help our
            furry friends find loving homes. Come for the boba, stay for the
            cuddles - and maybe even find your new best friend!
          </p>
          <img
            src={cartoon_boba_kitty}
            className="absolute bottom-27 left-173 w-50"
            alt="Cat drinking bubble tea"
          />
        </div>
      </div>
      {/* Read More Btn */}
      <div className="pb-8">
        <Link
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-light-purple to-medium-purple text-dark-purple font-montserrat font-bold text-sm rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Home;
