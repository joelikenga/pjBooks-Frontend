import React from "react";
import CountUp from "react-countup";

interface CardProps {
  title: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="border bg-default_secondary backdrop-blur-md p-4 rounded-lg shadow-lg w-full sm:w-1/3 min-h-[160px] flex flex-col justify-center items-center">
      <h3 className="text-lg font-semibold text-white text-center">
        {title}
      </h3>
      <p className="text-4xl font-bold text-default_accent text-center mt-2">
        <CountUp end={value} duration={2.75} />
      </p>
    </div>
  );
};

export default Card;
