import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ id, name, price, image, category, rating, onClick }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row bg-gray-300 p-4 gap-3 rounded-lg mb-3 shadow-md hover:scale-101 transition transform w-full sm:w-auto">
      {/* Image (Responsive) */}
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={name}
        className="w-full sm:w-24 h-32 object-cover rounded-lg"
      />

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-1">
        <div className="mb-2">
          <h3 className="font-bold text-lg sm:text-md">{name}</h3>
          <p className="text-sm text-gray-700">{category}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-semibold text-md sm:text-sm">Rs. {price}</p>
            {/* Rating */}
            <div className="font-bold text-md sm:text-sm">{rating}/5</div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart({ id, name, price })}
          className="bg-black cursor-pointer text-white px-3 py-2 text-sm mb-3 rounded-lg mt-3 sm:mt-0"
        >
          Add to Cart
        </button>
        <p className="text-sm underline cursor-pointer" onClick={onClick}>
          View More
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
