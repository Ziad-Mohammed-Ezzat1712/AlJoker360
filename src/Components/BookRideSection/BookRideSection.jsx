import React from "react";
import carImage from "../../../Images/sextion.jpg"; // ← غير المسار حسب مكان الصورة عندك
import { Link } from "react-router-dom";


export default function HeroSection() {
  return (

    <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto overflow-hidden ">
      {/* Left side - Text */}
      <div className="bg-black text-white xl:flex sm:flex md:flex lg:flex justify-between items-center xl:px-40 px-5  py-16 md:h-[442px] md:col-span-2 rounded-xl">
       <div> <h2 className="xl:text-[40px] text-[30px] font-semibold mb-4 leading-snug">
          Once the engine starts, the <br /> adventure begins.
        </h2>
        <p className="text-white  font-medium text-[20px] mb-6">
          Top Airports. Local Suppliers. 24/7 Support.
        </p></div>
          <div className="">
<Link to="/ourcars">       <button className="bg-[#D72638] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg w-fit">
          Book Ride
        </button></Link>
     </div>
      </div>
   

      {/* Right side - Image */}
      <div className="w-full h-[250px] md:h-[442px] md:col-span-1 mt-1 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 ">
        <img
          src={carImage}
          alt="Car"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

