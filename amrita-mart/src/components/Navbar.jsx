import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartIcon from "../assets/CartIcon.svg";
import UserIcon from "../assets/UserIcon.svg";
import Hamburger from "../assets/Hamburger.svg";
import Close from "../assets/Close.svg";
import BinIcon from "../assets/BinIcon.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // Cart sidebar state
  const { cartItems, removeFromCart, totalAmount, notification } = useCart(); // Access cart & notification

  return (
    <nav className="shadow-md px-6 md:px-12 lg:px-28 py-4 relative">
      {/* Notification Popup with Bounce Animation */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-md shadow-md transition-all duration-500 ease-in-out ${
          notification ? "animate-bounce-pop opacity-100" : "opacity-0"
        }`}
      >
        {notification}
      </div>

      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <p className="main-title text-2xl">
            <span className="text-[#C92121]">Amrita</span>Mart
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-sm">
          <ul className="flex list-none gap-12 items-center">
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-600 font-bold pb-2"
                    : "hover:text-blue-600 pb-2"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-600 font-bold pb-2"
                    : "hover:text-blue-600 pb-2"
                }
              >
                Contact Us
              </NavLink>
            </li>
            {/* Cart Button (Opens Sidebar) */}
            <li
              className="cursor-pointer flex gap-2 items-center"
              onClick={() => setCartOpen(true)}
            >
              <img src={CartIcon} alt="Cart" className="h-6 w-6 brightness-0" />
              Cart ({cartItems.length})
            </li>
            <li className="flex gap-2 w-fit items-center cursor-pointer bg-[#3E95F4] py-1.5 px-3 rounded-md text-white">
              <img src={UserIcon} alt="User" className="h-6 w-6 invert" />
              User
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src={isOpen ? Close : Hamburger}
              alt="Menu"
              className="h-8 w-8"
            />
          </button>
        </div>
      </div>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 flex flex-col z-50">
          <img
            src={Close}
            alt="Close"
            height="24px"
            className="self-end"
            width="24px"
            onClick={() => setCartOpen(false)}
          />
          <h2 className="text-xl font-bold mb-3">Your Cart</h2>
          <div className="flex-grow overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex bg-gray-400 p-2 rounded-lg justify-between items-center mb-2 py-2"
                >
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>Qty: {item.quantity}</p>
                  <img
                    src={BinIcon}
                    alt="Remove"
                    height="23px"
                    width="23px"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-4">Cart is empty</p>
            )}
          </div>
          <div className="border-t pt-2">
            <p className="text-lg font-bold">Total: ₹{totalAmount}</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-2">
              Checkout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
