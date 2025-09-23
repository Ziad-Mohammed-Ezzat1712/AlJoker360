import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP,FaCheck } from "react-icons/fa";


const BlogDetailsSec = () => {
  const learnList = [
    "Become a UI/UX designer.",
    "You will be able to start earning money Figma skills.",
    "Build a UI project from beginning to end.",
    "Work with colors & fonts.",
    "You will create your own UI Kit.",
    "Build & test a complete mobile app.",
    "Learn to design mobile apps & websites.",
    "Design 3 different logos.",
    "Create low-fidelity wireframe.",
    "Downloadable exercise files."
  ];

  const tags = ["Accessories", "Exterior", "Fuel System", "Interior", "Wheels", "Sound"];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 border-b border-gray-300">
      {/* Description */}
      <div className="text-[18px] space-y-4">
        <p>
          The car combines sleek design with powerful performance, offering a smooth driving experience on any road. Its advanced safety features, modern technology, and comfortable interior make every journey both enjoyable and secure. Whether for city commutes or long trips, this vehicle delivers reliability, style, and efficiency in every mile.
        </p>
        <p>
          Inside, the spacious cabin is crafted with high-quality materials, offering exceptional comfort for both driver and passengers. Advanced technology features, such as a smart infotainment system, voice control, and seamless smartphone connectivity, keep you entertained and connected at all times. Safety remains a top priority, with cutting-edge systems like adaptive cruise control, lane-keeping assist, and automatic emergency braking working together to protect you and your loved ones.
        </p>
        <p>
          Whether you need a reliable companion for your daily commute or a stylish partner for weekend adventures, this car delivers excellence, efficiency, and elegance in every journey.
        </p>
      </div>

      {/* Quote Box */}
      <div className="bg-[#FDEBEE] border-l-12 border-[#D72638] p-8 rounded-2xl text-gray-800">
        <p className="mb-4 text-[18px]">
          This car blends modern design with exceptional performance, giving you a smooth, safe, and enjoyable drive every time. With advanced features and a comfortable interior, it’s built to make every journey unforgettable.
        </p>
        <p className="font-bold text-[#050B20]">Luis Pickford</p>
      </div>

      {/* What you'll learn */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-[#050B20]">What you’ll learn</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {learnList.map((item, idx) => (
            <div key={idx} className="flex items-center text-[16px] gap-2 text-[#050B20]">
              <span className="text-[#D72638] bg-[#FDEBEE] w-6 h-6 rounded-full text-center text-[12px]"><FaCheck className="mx-auto mt-1"/></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Share buttons */}
      <div className="flex items-center gap-4 xl:px-20 xl:pt-10 text-[18px] text-[#050B20]">
        <span>Share this post</span>
        <FaFacebookF className="cursor-pointer " />
        <FaTwitter className="cursor-pointer " />
        <FaLinkedinIn className="cursor-pointer " />
        <FaPinterestP className="cursor-pointer  " />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 xl:px-50 mt-2  ">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-[#FDEBEE] text-[#D72638] px-4 py-3 rounded-full text-sm cursor-pointer "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailsSec;
