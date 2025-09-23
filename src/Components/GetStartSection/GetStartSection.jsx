import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GetStartSection() {
  const cards = [
    {
      title: "Are You Looking For a Car ?",
      description:
        "We are committed to providing our customers with exceptional service.",
      buttonText: "Get Started",
      buttonColor: "bg-[#D72638] hover:bg-red-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="red"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 16l1.5-4.5a2 2 0 011.9-1.4h7.2a2 2 0 011.9 1.4L19 16M5 16h14M7 20h2m6 0h2m-6-6v-4m0 0l-2 2m2-2l2 2"
          />
        </svg>
      ),
    },
    {
      title: "Do You Want to See All Cars ?",
      description:
        "We are committed to providing our customers with exceptional service.",
      buttonText: "Get Started",
      buttonColor: "bg-black hover:bg-neutral-800",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="red"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 17V7a2 2 0 012-2h12a2 2 0 012 2v10M4 17h16M9 21h6M9 13h6m-6-4h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-7xl  mx-auto  grid md:grid-cols-2 gap-6 overflow-hidden">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-pink-100 rounded-2xl 50 p-6 flex justify-between items-center"
        >
          <div className="max-w-[60%]">
            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-[#050B20] text-[16px] font-medium mb-4">{card.description}</p>
           <Link to="/ourcars"> <button
              className={`${card.buttonColor} text-white text-[18px] font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-2`}
            >
              {card.buttonText} <ArrowUpRight size={18} />
            </button></Link>
          </div>
          <div>{card.icon}</div>
        </div>
      ))}
    </div>
  );
}
