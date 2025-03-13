import { useState } from "react";

// Import fruit tea
import drink1 from "../assets/images/tea/fruit_tea/lychee_fruit_tea.jpeg";
import drink2 from "../assets/images/tea/fruit_tea/mango_tea.jpeg";
import drink3 from "../assets/images/tea/fruit_tea/passion_fruit_tea.jpeg";
import drink4 from "../assets/images/tea/fruit_tea/peach_tea.jpeg";
import drink5 from "../assets/images/tea/fruit_tea/strawberry_tea.jpeg";
import drink6 from "../assets/images/tea/fruit_tea/watermelon_tea.jpeg";
import drink7 from "../assets/images/tea/fruit_tea/honeydew_melon_tea.jpeg";

// Import iced tea
import drink8 from "../assets/images/tea/iced_tea/coconut_tea.jpeg";
import drink9 from "../assets/images/tea/iced_tea/hojicha_tea.jpeg";
import drink10 from "../assets/images/tea/iced_tea/lavender_honey_tea.jpeg";
import drink11 from "../assets/images/tea/iced_tea/lemon_green_tea.jpeg";
import drink12 from "../assets/images/tea/iced_tea/orange_jasmine_tea.jpeg";

// Import milk tea
import drink13 from "../assets/images/tea/milk_tea/assam_milk_tea.jpeg";
import drink14 from "../assets/images/tea/milk_tea/chocolate_milk_tea.jpeg";
import drink15 from "../assets/images/tea/milk_tea/classic_boba.jpeg";
import drink16 from "../assets/images/tea/milk_tea/oolong_milk_tea.jpeg";
import drink17 from "../assets/images/tea/milk_tea/rose_milk_tea.jpeg";
import drink18 from "../assets/images/tea/milk_tea/taro_milk_tea.jpeg";

// Import specials
import drink19 from "../assets/images/tea/specials/biscoff_tea.jpeg";
import drink20 from "../assets/images/tea/specials/brown_sugar_tea.jpeg";
import drink21 from "../assets/images/tea/specials/matcha_boba.jpeg";
import drink22 from "../assets/images/tea/specials/oreo_milk_tea.jpeg";
import drink23 from "../assets/images/tea/specials/strawberries_cream_boba.jpeg";

const allDrinks = {
  "Milk Teas": [
    {
      id: 13,
      name: "Assam Milk Tea",
      image: drink13,
      description:
        "Rich and malty Assam tea combined with creamy milk creates a bold yet smooth experience. A perfect balance of strong tea flavor and sweetness.",
    },
    {
      id: 14,
      name: "Chocolate Milk Tea",
      image: drink14,
      description:
        "A delightful fusion of chocolate and black tea, offering a velvety, cocoa-infused twist on classic milk tea. Perfect for chocolate lovers seeking a refreshing treat.",
    },
    {
      id: 15,
      name: "Classic Boba",
      image: drink15,
      description:
        "The timeless combination of black tea, milk, and chewy tapioca pearls makes this a go-to choice. A sweet, creamy, and satisfying favorite for boba lovers.",
    },
    {
      id: 16,
      name: "Oolong Milk Tea",
      image: drink16,
      description:
        "Smooth and aromatic oolong tea paired with creamy milk delivers a nutty and slightly floral taste. A great choice for those who enjoy a more complex tea profile.",
    },
    {
      id: 17,
      name: "Rose Milk Tea",
      image: drink17,
      description:
        "Fragrant rose petals infuse this milk tea with a delicate floral note. Lightly sweet and creamy, it's a perfect sip for a calming and elegant experience.",
    },
    {
      id: 18,
      name: "Taro Milk Tea",
      image: drink18,
      description:
        "Earthy and creamy, taro milk tea is a fan favorite with its unique purple hue. Its nutty sweetness pairs beautifully with soft, chewy boba pearls.",
    },
  ],

  "Fruit Teas": [
    {
      id: 1,
      name: "Lychee Fruit Tea",
      image: drink1,
      description:
        "Sweet and floral lychee essence blends perfectly with jasmine green tea. A light and refreshing option with a tropical twist.",
    },
    {
      id: 2,
      name: "Mango Tea",
      image: drink2,
      description:
        "A vibrant blend of juicy mango and fragrant green tea creates a tropical paradise in a cup. This drink is fruity, refreshing, and naturally sweet.",
    },
    {
      id: 3,
      name: "Passion Fruit Tea",
      image: drink3,
      description:
        "Tangy passion fruit meets smooth green tea for a bold and exotic taste. A refreshing choice for those who love a balance of tart and sweet flavors.",
    },
    {
      id: 4,
      name: "Peach Tea",
      image: drink4,
      description:
        "Sun-ripened peach flavor enhances this tea's natural sweetness. It's a smooth, juicy, and aromatic fruit tea that's great for any season.",
    },
    {
      id: 5,
      name: "Strawberry Tea",
      image: drink5,
      description:
        "A delightful infusion of fresh strawberries and black tea for a naturally sweet and slightly tangy sip. A berry lover's dream in every cup!",
    },
    {
      id: 6,
      name: "Watermelon Tea",
      image: drink6,
      description:
        "Crisp and refreshing watermelon juice blends seamlessly with green tea. This hydrating and subtly sweet drink is the ultimate summer refresher.",
    },
    {
      id: 7,
      name: "Honeydew Melon Tea",
      image: drink7,
      description:
        "Mellow honeydew flavors meet floral green tea for a smooth and refreshing taste. Lightly sweet with a hint of creaminess, this tea is a must-try.",
    },
  ],

  "Iced Teas": [
    {
      id: 8,
      name: "Coconut Tea",
      image: drink8,
      description:
        "A creamy and refreshing coconut-infused tea that transports you to a tropical getaway. The subtle nutty notes make every sip smooth and delightful.",
    },
    {
      id: 9,
      name: "Hojicha Tea",
      image: drink9,
      description:
        "A roasted Japanese green tea with deep, smoky, and nutty flavors. This lightly sweetened iced tea offers a cozy and comforting taste.",
    },
    {
      id: 10,
      name: "Lavender Honey Tea",
      image: drink10,
      description:
        "Floral lavender meets sweet honey in this calming iced tea. A soothing drink perfect for unwinding after a long day.",
    },
    {
      id: 11,
      name: "Lemon Green Tea",
      image: drink11,
      description:
        "Zesty lemon enhances the crisp taste of green tea, making for a refreshing and energizing sip. A great choice for a light and citrusy pick-me-up.",
    },
    {
      id: 12,
      name: "Orange Jasmine Tea",
      image: drink12,
      description:
        "The fragrant floral notes of jasmine tea blend beautifully with juicy orange. This tea is light, aromatic, and bursting with citrusy goodness.",
    },
  ],

  "Matcha & Specialty": [
    {
      id: 19,
      name: "Biscoff Tea",
      image: drink19,
      description:
        "A rich, cookie-butter flavored milk tea with caramelized biscuit notes. A decadent and creamy delight inspired by the famous Biscoff cookie.",
    },
    {
      id: 20,
      name: "Brown Sugar Boba",
      image: drink20,
      description:
        "Caramelized brown sugar syrup swirls into fresh milk for a rich and indulgent treat. The warm, toasty sweetness pairs perfectly with chewy boba.",
    },
    {
      id: 21,
      name: "Matcha Boba",
      image: drink21,
      description:
        "A creamy blend of high-quality matcha and milk, balanced with a hint of natural sweetness. Earthy, smooth, and perfect for matcha lovers.",
    },
    {
      id: 22,
      name: "Oreo Milk Tea",
      image: drink22,
      description:
        "Classic milk tea meets crushed Oreos for a creamy and chocolatey delight. A nostalgic favorite that tastes just like cookies and cream.",
    },
    {
      id: 23,
      name: "Strawberries & Cream Boba",
      image: drink23,
      description:
        "Juicy strawberries are blended with creamy milk for a dreamy, dessert-like drink. A fruity and indulgent experience in every sip.",
    },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Milk Teas");
  const [expandedDrink, setExpandedDrink] = useState(null);

  return (
    <div className="relative mt-6 mb-10 text-center">
      <h1 className="text-3xl font-fredoka font-bold text-light-pink">
        Drinks Menu
      </h1>
      <p className="text-xl font-montserrat font-semibold text-light-purple mt-8">
        From classic milk teas to fruity refreshers, explore our handcrafted
        drinks made with the finest ingredients!
      </p>
      {/* Drinks navigation */}
      {/* TODO clicking on the drink categoy will filter + display those drinks */}
      {/* TODO the drink category that you are viewing is a different color from the other categories */}
      <div className="w-6xl mt-10 pb-6 pt-6 mx-auto bg-white/25 backdrop-blur-lg shadow-lg flex flex-row justify-center gap-x-30 rounded-xl">
        <p className="text-xl font-montserrat font-bold text-medium-pink">
          Milk Teas
        </p>
        <p className="text-xl font-montserrat font-bold text-medium-pink">
          Fruit Teas
        </p>
        <p className="text-xl font-montserrat font-bold text-medium-pink">
          Matcha & Specialty
        </p>
        <p className="text-xl font-montserrat font-bold text-medium-pink">
          Ice Blend
        </p>
      </div>

      {/* TODO Display drinks based on category selected */}
    </div>
  );
};

export default Menu;
