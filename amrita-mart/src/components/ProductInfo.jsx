import React from "react";
import LeftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";
import CloseIcon from "../assets/Close.svg";
import { useCart } from "../context/CartContext"; // Import useCart

const ProductInfo = ({ product, onClose, onNavigate, hasNext, hasPrev }) => {
  const { addToCart } = useCart(); // Get addToCart from CartContext

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          <img src={CloseIcon} alt="Close" className="h-6 w-6" />
        </button>

        {/* Left Navigation */}
        {hasPrev && (
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-400 p-3 rounded-full hover:bg-gray-500"
            onClick={() => onNavigate("prev")}
          >
            <img src={LeftArrow} alt="Previous" className="h-5 w-5" />
          </button>
        )}

        {/* Product Details */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          {/* Product Image Placeholder */}
          <div className="w-full sm:w-1/3 bg-gray-500 h-40 sm:h-48 rounded-lg"></div>

          {/* Product Info */}
          <div className="w-full sm:w-2/3 sm:pl-6 text-center sm:text-left mt-4 sm:mt-0">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <hr className="my-2 border-gray-400" />
            <p className="text-lg font-semibold">{product.price}</p>
            <p className="text-xs text-gray-500">Inclusive of all taxes.</p>
            <button
              className="mt-4 bg-black cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-900"
              onClick={() => addToCart(product)} // Add to cart on click
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Navigation */}
        {hasNext && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400 p-3 rounded-full hover:bg-gray-500"
            onClick={() => onNavigate("next")}
          >
            <img src={RightArrow} alt="Next" className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
