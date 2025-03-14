import { useState, useEffect } from "react";
import productsData from "../data/products.json"; // Import JSON data

// TODO d.	Clicking "Add to Cart" updates the shopping cart dynamically

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData); // Load products from JSON
  }, []);

  return (
    <div className="mt-6 text-center">
      <h1 className="text-3xl font-fredoka font-bold text-light-pink">Shop</h1>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-12 px-6 md:px-12 lg:px-24 mb-16 max-w-6xl mx-auto gap-x-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full max-w-[300px] mx-auto"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg"
            />

            {/* Product Name */}
            <h2 className="text-lg uppercase font-montserrat font-bold text-medium-pink mt-4">
              {product.name}
            </h2>

            {/* Product Description */}
            <p className="text-sm font-montserrat text-dark-purple mt-2">
              {product.description}
            </p>

            {/* Product Price */}
            <p className="text-lg font-montserrat font-semibold text-dark-purple mt-4">
              £{product.price.toFixed(2)}
            </p>

            {/* Add to Cart Button */}
            <button className="mt-4 px-6 py-2 bg-light-pink text-white font-bold rounded-full shadow-md hover:scale-105 transition-transform">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
