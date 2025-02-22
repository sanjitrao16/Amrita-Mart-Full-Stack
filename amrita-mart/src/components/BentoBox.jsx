import React from "react";
import Cake from "../assets/caketransparent.png";
import Fruit from "../assets/fruitstransparent.png";
import DailyNeeds from "../assets/DailyNeeds.png";
import NoteBook from "../assets/NoteBook.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";

const BentoItem = ({
  title,
  subtitle,
  callToAction,
  imgSrc,
  bgColor,
  textColor,
  buttonColor,
  buttonTextColor,
  itemBgImage,
}) => {
  return (
    <div
      className={`relative rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center ${bgColor} p-6 md:p-8`}
    >
      {/* Background Image */}
      {itemBgImage && (
        <img
          src={itemBgImage}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
        />
      )}

      {/* Text Content */}
      <div className="relative z-10 text-center md:text-left">
        <h3 className={`font-bold ${textColor} text-xl md:text-3xl mb-2`}>
          {title}
        </h3>
        <p className="text-sm md:text-base mb-4">{subtitle}</p>

        {callToAction && (
          <button
            className={`py-1.5 px-4 text-sm md:text-base cursor-pointer font-semibold ${buttonColor} ${buttonTextColor} rounded-xl`}
          >
            {callToAction}
          </button>
        )}
      </div>

      {/* Image */}
      {imgSrc && (
        <div className="relative z-10 w-24 md:w-40 lg:w-48">
          <img src={imgSrc} alt={title} className="object-contain w-full" />
        </div>
      )}
    </div>
  );
};

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-16 py-6">
      <BentoItem
        title="Birthday Bash!"
        subtitle="Have a great celebration"
        imgSrc={Cake}
        bgColor="bg-red-100"
        textColor="text-red-900"
        callToAction="Order Now"
        buttonColor="bg-red-500"
        buttonTextColor="text-white"
        itemBgImage={Vector1}
      />
      <BentoItem
        title="Academic and Tech Essentials"
        subtitle="Power your learning."
        imgSrc={NoteBook}
        bgColor="bg-green-100"
        callToAction="Start Learning"
        buttonColor="bg-green-600"
        buttonTextColor="text-white"
        textColor="text-green-900"
      />
      <BentoItem
        title="Dorm & Daily Needs"
        subtitle="Live Comfortably!!"
        imgSrc={DailyNeeds}
        bgColor="bg-orange-100"
        callToAction="Buy Now"
        buttonColor="bg-orange-500"
        buttonTextColor="text-white"
        textColor="text-orange-900"
      />
      <BentoItem
        title="Fruit Frenzy!!"
        subtitle="Fresh fruits, anytime!"
        imgSrc={Fruit}
        bgColor="bg-blue-100"
        textColor="text-[#00224A]"
        callToAction="Order Now"
        buttonColor="bg-blue-700"
        buttonTextColor="text-white"
        itemBgImage={Vector2}
      />
    </div>
  );
};

export default BentoGrid;
