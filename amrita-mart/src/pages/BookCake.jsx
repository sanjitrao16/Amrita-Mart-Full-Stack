import React from "react";

const BookCake = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <h1 className="text-3xl font-bold text-red-600">Book a Cake</h1>
      <p className="text-lg mt-4">Choose your favorite cake and place an order!</p>
      
      {/* Example of a form (optional) */}
      <form className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 border border-gray-400 rounded-md"
        />
        <input
          type="text"
          placeholder="Cake flavor"
          className="p-2 border border-gray-400 rounded-md"
        />
        <button className="bg-red-500 text-white py-2 px-4 rounded-md">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default BookCake;
