import React from "react";
import CartIcon from "../assets/CartIcon.svg";
import UserIcon from "../assets/UserIcon.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-28 py-4">
        <div>
          <p className="text-xl font-bold">Amrita Mart</p>
        </div>

        <div className="text-sm">
          <ul className="flex list-none gap-12 items-center">
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Book a Cake</a>
            </li>
            <li>
              <a href="" className="flex gap-2 items-center">
                <img
                  src={CartIcon}
                  alt="Cart"
                  height="25px"
                  width="25px"
                  className="brightness-0"
                />
                Cart
              </a>
            </li>
            <li className="flex gap-2 items-center cursor-pointer bg-[#3E95F4] py-1.5 px-3 rounded-md text-white">
              <img
                src={UserIcon}
                alt="User"
                height="23px"
                width="23px"
                className="invert"
              />
              User
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
