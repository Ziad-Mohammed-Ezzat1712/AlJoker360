// MostSearchedCars.jsx
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Bookmark } from "lucide-react"; // أيقونة Bookmark
import { FiChevronLeft, FiChevronRight,FiArrowUp,  } from "react-icons/fi";
import { FaGasPump,FaTachometerAlt,FaRegKeyboard   } from "react-icons/fa";
// صور عربيات (تقدر تبدلها)
import CarImg from "../../../Images/SUV.jpg";
import cross from "../../../Images/cross.jpg";
import elentra8 from "../../../Images/sedan/elentra8.jpg";
import mercedes from "../../../Images/sedan/mercedes.jpg";
import nissan from "../../../Images/sedan/nissan.jpg";
import Kia from "../../../Images/sedan/Kia.jpg";
import Kiaold from "../../../Images/sedan/Kiaold.jpg";
import elentranew from "../../../Images/sedan/elentranew.jpg";
import  Mazda from "../../../Images/sedan/Mazda.jpg";
import  Toyota from "../../../Images/sedan/Toyota.jpg";
import  HyundaiCreta from "../../../Images/Suv/HyundaiCreta.jpg";
import  NissanPatrol from "../../../Images/Suv/NissanPatrol.jpg";
import  KiaCarnival from "../../../Images/Suv/KiaCarnival.jpg";
import  HyundaiPalisade from "../../../Images/Suv/HyundaiPalisade.jpg";
import  BMW430i from "../../../Images/Convertible/BMW430i.jpg";
import  FordMustang from "../../../Images/Convertible/Ford-Mustang.jpg";
import  MercedesAMG from "../../../Images/Convertible/Mercedes-AMG.jpg";
import  bmwz4 from "../../../Images/Convertible/bmwz4.avif";
import  Volkswagen from "../../../Images/Hatchback/Volkswagen.jpg";
import  Chevrolet from "../../../Images/Hatchback/Chevrolet.jpg";
import  ToyotaYaris from "../../../Images/Hatchback/ToyotaYaris.jpg";
import  Renault from "../../../Images/Hatchback/Renault.jpg";
import { Link } from "react-router-dom";

const categories = ["Sedan", "SUV", "Convertible", "Hatchback"];

// بيانات تجريبية
const cars = {
  Sedan: [
    { id: 1, name: "Elantra — 2024",des:"4.0 D5 PowerPulse Momentum...", miles: "15 Miles", fuel: "Petrol", gear: "CVT", price: "$15,000", img: elentra8 },
   { id: 2, name: "Mercedes C300-2020", des:"4.0 D5 PowerPulse Momentum...", miles: "12 Miles", fuel: "Diesel", gear: "Auto", price: "$45,000", img: mercedes },
    { id: 3, name: "Nissan Sentra -2023", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: nissan },
    { id: 4, name: " Kia K5-2025", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: Kia },
    { id: 5, name: "Kia K7-2020", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: Kiaold },
  { id: 6, name: "Mazda 6-2019", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: Mazda },
    { id: 7, name: "Hyundai Accent-2025", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: elentranew },
    { id: 8, name: "Toyota Camry-2025", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: Toyota },
 
  
  ],
  SUV: [
    { id: 14, name: "Hyundai Creta-2025", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: HyundaiCreta },
  { id: 15, name: "Kia Carnival-2024", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Auto", price: "$28,000", img: KiaCarnival },
    { id: 16, name: "Nissan Patrol-2025", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: NissanPatrol },
    { id: 17, name: "Hyundai Palisade", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: HyundaiPalisade },
 
   
    ],
  Convertible: [
   { id: 19, name: "BMW 430i-2024",des:"4.0 D5 PowerPulse Momentum...", miles: "15 Miles", fuel: "Petrol", gear: "CVT", price: "$15,000", img: BMW430i },
   { id: 20, name: "Ford-Mustang-2024", des:"4.0 D5 PowerPulse Momentum...", miles: "12 Miles", fuel: "Diesel", gear: "Auto", price: "$45,000", img: FordMustang },
    { id: 21, name: "Mercedes-AMG", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: MercedesAMG },
    { id: 22, name: "BMW Z4-2025", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: bmwz4 },
    
  
  ],
  Hatchback: [
    { id: 23, name: "Volkswagen Golf 8 -2021 ", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: Volkswagen },
  { id: 24, name: "Chevrolet Aveo LT -2023", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: Chevrolet },
    { id: 25, name: " Toyota Yaris -2024", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: ToyotaYaris },
    { id: 26, name: "Renault Clio  -2020", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: Renault  },
 
   
    
    ],
};

export default function MostSearchedCars() {
  const [activeCategory, setActiveCategory] = useState("Sedan");
  const swiperRef = useRef(null);

  return (
    <div className="py-12 xl:px-0  bg-white overflow-hidden">
      {/* العنوان */}
      <h2 className="text-[40px] md:text-[40px] font-semibold text-center text-[#050B20] mb-8">
        The Most Searched Cars
      </h2>

      {/* Tabs */}
      <div className="flex justify-center  gap-8 mb-8 border-b border-gray-200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-2 text-lg font-medium transition-all ${
              activeCategory === cat
                ? "text-[#E63946] border-b-2 border-[#E63946]"
                : "text-gray-700 hover:text-[#E63946]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {cars[activeCategory].map((car) => (
            <SwiperSlide key={car.id}>
              <div className="bg-white rounded-2xl shadow p-4 flex flex-col relative border-[1px] border-gray-300">
                {/* زر Bookmark */}
                <button className="absolute top-10 right-5 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <Bookmark className="w-5 h-5 text-gray-700" />
                </button>

                {/* صورة */}
                <img
                  src={car.img}
                  alt={car.name}
                  className="xl:w-[328px] h-[218.64999389648438px] xl:object-contain object-cover   rounded-lg "
                />

                {/* تفاصيل */}
                <h3 className="text-lg font-bold text-[#0A0A23] mb-1">
                  {car.name}
                </h3>
                  <p className="text-[16px]  text-[#050B20] mb-1"> 
                    
                  {car.des}
                </p>
<div className="flex justify-between border-t border-b border-gray-300 py-4">
  <div>
    <FaTachometerAlt className="text-xl mx-auto mb-2 text-gray-700" />
    <p className="text-[16px]  ">{car.miles}</p>
  </div>

  <div>
    <FaGasPump className="text-xl mx-auto mb-2 text-gray-700" />
    <p className="text-[16px]  ">{car.fuel}</p>
  </div>

  <div>
    <FaRegKeyboard className="text-xl mx-auto mb-2 text-gray-700" />
    <p className="text-[16px]  ">{car.gear}</p>
  </div>
</div>


                <div className="flex justify-between mt-5 items-center ">
                  <span className="text-[20px] font-semibold text-[#0A0A23]">
                    {car.price}
                  </span>
                  <button className="text-[#D72638] font-medium   text-[18px] ">
                             <Link to={`/car/${car.id}`} className="text-[#D72638] font-medium text-[18px]">
                    <span className="flex gap-x-1 cursor-pointer">
                      View Details
                      <FiArrowUp className="text-[20px] text-[#D72638] mt-1 rotate-[45deg]" />
                    </span>
                  </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* أسهم تحت */}
      <div className="flex justify-center gap-4 mt-6">
  <button
    onClick={() => swiperRef.current.slidePrev()}
    className="w-20 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
  >
    <FiChevronLeft className="text-2xl text-gray-700" />
  </button>
  <button
    onClick={() => swiperRef.current.slideNext()}
    className="w-20 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
  >
    <FiChevronRight className="text-2xl text-gray-700" />
  </button>
</div>
      </div>
    </div>
  );
}
