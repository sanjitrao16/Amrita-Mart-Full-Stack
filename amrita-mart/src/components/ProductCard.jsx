import React from "react";

const ProductCard = ({ name, category, price, rating, image, onClick }) => {
  return (
    <div
      className="flex flex-col sm:flex-row bg-gray-300 p-4 gap-3 rounded-lg mb-3 cursor-pointer shadow-md
                 hover:scale-105 transition transform w-full sm:w-auto"
      onClick={onClick}
    >
      {/* Image (Responsive) */}
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={name}
        className="w-full sm:w-24 h-32 object-cover rounded-lg"
      />

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-lg sm:text-md">{name}</h3>
          <p className="text-sm text-gray-700">{category}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-semibold text-md sm:text-sm">Rs. {price}</p>
            {/* Rating */}
            <div className="font-bold text-md sm:text-sm">{rating}/5</div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="bg-black cursor-pointer text-white px-3 py-2 text-sm rounded-lg mt-3 sm:mt-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
