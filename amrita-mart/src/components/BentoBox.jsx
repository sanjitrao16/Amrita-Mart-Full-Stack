import React from "react";
import Cake from "../assets/caketransparent.png";
import Fruit from "../assets/fruitstransparent.png";

const BentoItem = ({
  title,
  subtitle,
  imgSrc,
  bgColor,
  textColor,
  itemHeight,
  itemWidth,
  fontSize,
}) => {
  return (
    <div
      className={` ${itemHeight} ${itemWidth} p-6 rounded-2xl shadow-lg flex justify-start items-center ${bgColor}`}
    >
      <div>
        <h3 className={`font-bold ${textColor} ${fontSize}`}>{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
      <div>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={title}
            className="mt-auto w-56 h-56 object-contain"
          />
        )}
      </div>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-18 py-4">
      <BentoItem
        title="Birthday Bash!"
        subtitle="Have a great celebration"
        imgSrc={Cake}
        bgColor="bg-red-100"
        textColor="text-red-900"
        itemHeight={"h-60"}
        fontSize={"text-3xl"}
      />
      <BentoItem
        title="Crunch your savour"
        subtitle="Lorem ipsum dolor sit consectetur"
        imgSrc="/chips.png"
        bgColor="bg-green-100"
        textColor="text-green-900"
      />
      <BentoItem
        title="Delicious Indian Cuisine"
        subtitle="Lorem ipsum dolor sit consectetur"
        imgSrc="/cuisine.png"
        bgColor="bg-orange-100"
        textColor="text-orange-900"
      />
      <BentoItem
        title="Fruit Frenzy!!"
        subtitle="Fresh and healthy"
        imgSrc={Fruit}
        bgColor="bg-blue-100"
        textColor="text-blue-900"
      />
    </div>
  );
};

export default BentoGrid;
