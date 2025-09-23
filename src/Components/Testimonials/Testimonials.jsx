import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import user1 from "../../../Images/user1.jpg";
import user2 from "../../../Images/user2.jpg";
import user3 from "../../../Images/user3.jpg";


export default function Testimonials() {
  const testimonials = [
    {
      title: "Great Work",
      text: `"Friendly staff and quick delivery right to my hotel. I was impressed by the quality of the car and how well it was maintained. Highly recommend to anyone visiting Dubai." – James L.`,
      author: "Leslie Alexander",
      role: "Facebook",
      img: user1,
    },
    {
      title: "Awesome Design",
      text: `"The booking process was super easy, and the prices were very reasonable compared to other companies. The staff explained everything clearly and made sure I got the perfect car for my needs." `,
      author: "Jenny Wilson",
      role: "Website",
      img: user2,
    },
    {
      title: "Perfect Quality",
      text: `"Great service and very clean cars! The whole process was smooth from start to finish, and the car was delivered exactly on time. Will definitely rent again on my next trip to Dubai." `,
      author: "Courtney Henry",
      role: "Tiktok",
      img: user3,
    },
    {
      title: "Super Friendly",
      text: `"Very friendly and supportive staff. Booking was quick and easy."`,
      author: "James Carter",
      role: "Google",
      img: user1,
    },
    {
      title: "Excellent Support",
      text: `"Customer service was excellent and the car was in great condition."`,
      author: "Sophia Lee",
      role: "Instagram",
      img: user1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // نعرض 3 في كل صفحة

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="bg-gray-100 max-w-[1550px] mx-auto rounded-xl py-12">
      <div className="max-w-[1450px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h2 className="text-[40px] font-semibold">What our customers say</h2>
          <p className=" text-[16px]">
            Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-10 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-[20px]">{item.title}</h3>
                <ImQuotesLeft className="text-[#D72638] text-[32px]" />
              </div>
              <p className=" mb-6 text-[15px] max-w-64">{item.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border hover:bg-gray-100 transition"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border hover:bg-gray-100 transition"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
