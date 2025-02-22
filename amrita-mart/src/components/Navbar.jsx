import React, { useState } from "react";
import CartIcon from "../assets/CartIcon.svg";
import UserIcon from "../assets/UserIcon.svg";
import Hamburger from "../assets/Hamburger.svg";
import Close from "../assets/Close.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md px-6 md:px-12 lg:px-28 py-4">
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
              <a href="" className="hover:text-blue-600">
                Shop
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="flex gap-2 items-center">
                <img
                  src={CartIcon}
                  alt="Cart"
                  className="h-6 w-6 brightness-0"
                />
                Cart
              </a>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 bg-white mt-4 p-4 shadow-lg rounded-lg">
          <a href="" className="hover:text-blue-600">
            Shop
          </a>
          <a href="" className="hover:text-blue-600">
            Book a Cake
          </a>
          <a href="" className="flex gap-2 items-center">
            <img src={CartIcon} alt="Cart" className="h-6 w-6 brightness-0" />
            Cart
          </a>
          <a className="flex gap-2 items-center cursor-pointer bg-[#3E95F4] py-2 px-3 rounded-md text-white">
            <img src={UserIcon} alt="User" className="h-6 w-6 invert" />
            User
          </a>
        </div>
      )}
    </nav>
  );
}
