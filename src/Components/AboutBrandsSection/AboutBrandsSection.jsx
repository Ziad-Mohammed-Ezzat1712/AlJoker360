import React from "react";
import audi from "../../../Images/audi.jpg"; 
import bmw from "../../../Images/bmw.jpg"; 
import ford from "../../../Images/ford.jpg"; 
import mercedes from "../../../Images/mercedes.jpg"; 
import peugeot from "../../../Images/peugeot.jpg"; 
import vw from "../../../Images/vw.jpg"; 
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function AboutBrandsSection() {
  const brands = [
    { name: "Audi", img: audi },
    { name: "BMW", img: bmw },
    { name: "Ford", img: ford },
    { name: "Mercedes Benz", img: mercedes },
    { name: "Peugeot", img: peugeot },
    { name: "Volkswagen", img: vw },
  ];

  return (
    <div className="max-w-[1450px] mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Explore Our Premium Brands</h2>
        <Link
  to="/brands"
  className="text-[#D72638] flex gap-x-1 cursor-pointer text-[18px] font-semibold items-center gap-1"
>
  Show All Brands 
  <FiArrowUp className="text-[20px] text-[#D72638] mt-1 rotate-[45deg]" />
</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="border rounded-xl flex flex-col items-center p-4 hover:shadow-md transition"
          >
            <img src={brand.img} alt={brand.name} className="h-[120px] w-[180px] mb-3" />
            <p className="font-medium text-[16px]">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

