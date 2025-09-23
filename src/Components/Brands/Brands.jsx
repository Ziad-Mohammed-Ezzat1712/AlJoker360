import React from "react";
import audi from "../../../Images/audi.jpg"; 
import bmw from "../../../Images/bmw.jpg"; 
import ford from "../../../Images/ford.jpg"; 
import mercedes from "../../../Images/mercedes.jpg"; 
import peugeot from "../../../Images/peugeot.jpg"; 
import vw from "../../../Images/vw.jpg"; 
import nissan from "../../../Images/nissan.jpeg"
import toyota from "../../../Images/toyota.webp"
import renault from "../../../Images/renault.png"
import hyundai from "../../../Images/hyundai.jpeg"
export default function Brands() {
  const brands = [
    { name: "Audi", img: audi },
    { name: "BMW", img: bmw },
    { name: "Ford", img: ford },
    { name: "Mercedes Benz", img: mercedes },
    { name: "Peugeot", img: peugeot },
    { name: "Volkswagen", img: vw },
    { name: "Nissan", img: nissan },
    { name: "Toyota", img: toyota },
    { name: "Renault", img: renault },
    { name: "Hyundai", img: hyundai },
    // هنا تقدر تزود برندات تانية براحتك
  ];

  return (
    <div className="bg-white max-w-10xl lg:rounded-[60px] relative xl:z-40 lg:z-40  mt-[-50px] lg:mt-[-30px] mb-[-50px] mx-auto px-4 py-10">
    <div className="max-w-[1450px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Brands</h1>
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
    </div>
  );
}

