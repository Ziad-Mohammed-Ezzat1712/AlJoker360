import React, { useState } from "react";
import blog1 from "../../../Images/blog1.jpg";
import blog2 from "../../../Images/blog2.jpg";
import blog3 from "../../../Images/blog3.jpg";
import blog4 from "../../../Images/blog4.jpg";
import blog5 from "../../../Images/blog5.jpg";
import blog6 from "../../../Images/blog6.jpg";
import { FaGasPump, FaTachometerAlt, FaRegKeyboard } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function AboutSection1() {
  
  return (
    <div className="mb-10">
    <div className="mb-6 xl:px-55 px-12">
        <p className="text-[20px] font-medium ">
          <span className="text-[#D72638] ">Home</span> / About
        </p>
        <h2 className="text-[40px] font-semibold mt-1">About</h2>
        </div>

        <div className="xl:flex flex-col md:flex-row  justify-around px-12 gap-4">
  {/* Left - Text */}
  <div className="flex justify-center xl:max-w-[470px]  md:text-left">
    <h2 className="text-[40px] font-semibold">
      We Value Our Clients And Want Them To Have A Nice Experience
    </h2>
  </div>

  {/* Right - Paragraphs */}
  <div className="space-y-4 xl:max-w-[570px] xl:text-center md:text-left">
    <p className="text-[18px] mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0">
      Since 2020, we have been your trusted partner for car rentals in Dubai. With more than 10,000 satisfied customers worldwide—especially from the GCC—we built our reputation on one principle: Trust comes first.

We offer all types of cars at the best prices in Dubai, from luxury and sports cars to family and economy options.


    </p>

    <p className="text-[16px]">
      Choose us, and enjoy a smooth, reliable, and affordable car rental experience.

👉 Book your car today and drive with confidence  </p>
  </div>
</div>

    </div>
  );
}

