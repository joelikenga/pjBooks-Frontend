import React from 'react'


interface CardProps {
  title: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-[#0f0d0d] p-6 rounded-lg shadow-lg  w-full">
      <h3 className="text-lg font-semibold text-gray-100 text-center">{title}</h3>
      <p className="text-2xl font-bold text-yellow-200 text-center mt-2">{value}</p>
    </div>
  );
};

export default Card

