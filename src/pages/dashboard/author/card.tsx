import React from "react";
import CountUp from "react-countup";

interface CardProps {
  title: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-[#0f0d0d] bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg w-full sm:w-1/3 min-h-[160px]">
      <h3 className="text-lg font-semibold text-gray-100 text-center">
        {title}
      </h3>
      <p className="text-4xl font-bold text-yellow-200 text-center mt-2">
        <CountUp end={value} duration={2.75} />
      </p>
    </div>
  );
};

export default Card;
