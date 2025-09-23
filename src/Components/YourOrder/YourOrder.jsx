
import React from "react";
import { FiShare2 } from "react-icons/fi";
import { FaUserFriends, FaSuitcase, FaDoorOpen } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";
import { Bookmark,  } from "lucide-react";
import { FaGasPump, FaTachometerAlt, FaCogs, FaRegCalendarAlt } from "react-icons/fa";

// صور تجريبية
import car1 from "../../../Images/blog5.jpg";
import car2 from "../../../Images/blog1.jpg";
import car3 from "../../../Images/blog2.jpg";
import car4 from "../../../Images/blog3.jpg";
import car5 from "../../../Images/blog4.jpg";
import Calendar from "../Calendar/Calendar";

export default function YourOrder() {
  return (
    <div className="bg-white max-w-10xl xl:rounded-[60px] relative z-40 xl:mt-[-50px] mt-[-20px] mb-[-50px] mx-auto px-4 py-10">
    <div className="mb-6 px-5  lg:px-6 xl:px-40  max-w-[1500px]">
        <p className="text-[20px] font-medium">
          <span className="text-[#D72638]">Home</span> / Your Order detials
        </p>
        <h2 className="text-[40px] font-semibold mt-1">Your order detials</h2>
       
      </div>

      <div className="max-w-[1500px] mx-auto p-6">
        {/* العنوان والسعر */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-[20px] mb-2 font-bold">Toyota Camry New</h1>
            <p className="text-[#050B20] text-[16px]">
              3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate
            </p>

            <div className="flex flex-wrap gap-3 mt-3">
              <span className="flex items-center gap-2 bg-[#FDEBEE] text-[#D72638] px-3 py-1 rounded-full text-[16px]">
                <FaRegCalendarAlt className="text-[16px] mx-auto " /> 2023
              </span>
              <span className="flex items-center gap-2 bg-[#FDEBEE] text-[#D72638] px-3 py-1 rounded-full text-[16px]">
                <FaTachometerAlt className="text-[16px] mx-auto " /> 20 miles
              </span>
              <span className="flex items-center gap-2 bg-[#FDEBEE] text-[#D72638] px-3 py-1 rounded-full text-[16px]">
                <FaCogs className="text-[16px] mx-auto " /> Automatic
              </span>
              <span className="flex items-center gap-2 bg-[#FDEBEE] text-[#D72638] px-3 py-1 rounded-full text-[16px]">
                <BsFuelPump className="text-[16px] mx-auto " /> Petrol
              </span>
            </div>
          </div>

          {/* السعر + الأزرار */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-full md:w-[250px] text-center">
            <div className="flex justify-start gap-4 mb-1">
              <button className="p-1 flex gap-x-2 cursor-pointer ">
                Share <FiShare2 className="mt-1" />
              </button>
              <button className="p-1 flex gap-x-2 cursor-pointer ">
                Save <Bookmark />
              </button>
            </div>
            <p className="text-[20px] font-semibold text-left ">start from</p>
            <h2 className="text-[40px] text-left font-semibold text-[#D72638]">
              $40,000
            </h2>
          </div>
        </div>

        {/* الصور */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-[1400px] mx-auto">
          <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
            <img
              src={car1}
              alt="Car"
              className="w-full h-[300px] md:h-[566px] object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={car2} alt="Car" className="w-full h-[150px] md:h-[275px] object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={car3} alt="Car" className="w-full h-[150px] md:h-[275px] object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={car4} alt="Car" className="w-full h-[150px] md:h-[275px] object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={car5} alt="Car" className="w-full h-[150px] md:h-[275px] object-cover" />
          </div>
        </div>

        {/* Description + Specifications */}
        <div className="max-w-[1500px] grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-10">
          {/* Description */}
          <div className="bg-white rounded-xl py-5 md:col-span-2">
            <h3 className="text-xl font-semibold mb-3">Description</h3>
            <p className="text-[#050B20] text-[16px] md:text-[18px] leading-relaxed">
              Rent a Kia Pegas in Dubai if you’re seeking a compact and
              economical car. Designed primarily for emerging markets, the Kia
              Pegas is both economical and value-oriented, providing essential
              features without unnecessary extras.
              <br />
              <br />
              Driving the Kia Pegas is smooth, with responsive handling
              especially in lower to mid-range gears. The 2020 Kia Pegas boasts
              a sleek and modern exterior design. The Kia Pegas has a smart,
              simple interior design providing sufficient comfort for five
              passengers. Dubai is known for its long distances and traffic. The
              fuel efficiency of the Kia Pegas rental significantly reduces fuel
              costs. The compact size of this vehicle makes it easy to navigate
              crowded streets and find parking in busy areas of Dubai.
            </p>
          </div>

          {/* Specifications */}
          <div className="bg-white mx-auto mt-6 md:mt-20 rounded-xl p-6 grid grid-cols-2 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <FaRegCalendarAlt className="text-[18px] text-[#D72638]" />
              <span className="text-[#050B20] text-[16px]">2023</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUserFriends className="text-[18px] text-[#D72638]" />
              <span className="text-[#050B20] text-[16px]">5 passenger</span>
            </div>
            <div className="flex items-center gap-3">
              <FaDoorOpen className="text-[18px] text-[#D72638]" />
              <span className="text-[#050B20] text-[16px]">4 Doors</span>
            </div>
            <div className="flex items-center gap-3">
              <FaSuitcase className="text-[18px] text-[#D72638]" />
              <span className="text-[#050B20] text-[16px]">2 luggage</span>
            </div>
          </div>
          
        </div>
        <div className=" flex gap-10">
          <Calendar/>
          <Calendar/>
        </div>
      </div>
    </div>
  );
}