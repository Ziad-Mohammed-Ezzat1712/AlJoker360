import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blog1 from "../../../Images/blog1.jpg";
import blog2 from "../../../Images/blog2.jpg";
import blog3 from "../../../Images/blog3.jpg";
import blog4 from "../../../Images/blog4.jpg";
import blog5 from "../../../Images/blog5.jpg";
import blog6 from "../../../Images/blog6.jpg";

import { FaGasPump, FaTachometerAlt, FaRegKeyboard } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const posts = [
  { id: 1, category: "Sound", image: blog1, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.Nullam tempus ..." },
  { id: 2, category: "Accessories", image: blog2, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." },
  { id: 3, category: "Sound", image: blog3, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." },
  { id: 4, category: "Sound", image: blog4, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." },
  { id: 5, category: "Sound", image: blog5, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." },
  { id: 6, category: "Sound", image: blog6, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." },
  { id: 7, category: "Sound", image: blog5, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." },
{ id: 8, category: "Sound", image: blog5, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." },
  { id: 9, category: "Sound", image: blog6, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." },
  { id: 10, category: "Sound", image: blog5, date: "November 22, 2023", title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary", desc: "Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis." }
];

const categories = ["Accessories", "Body Kit", "Exterior", "Fuel Systems", "Interior", "Oil & Filters", "Sound", "Wheels"];

const tags = ["Accessories", "Exterior", "Fuel System", "Interior", "Sound", "Wheels"];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
const navigate = useNavigate();
  // حساب العدد الكلي للصفحات
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // تحديد البوستات اللي تظهر حسب الصفحة
  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (

    <div className="bg-white max-w-10xl xl:rounded-[60px] relative z-40 xl:mt-[-50px]  mt-[0px] mb-[-50px] mx-auto px-4 py-10">
     <div className="mb-6 xl:px-12">
        <p className="text-[20px] font-medium ">
          <span className="text-[#D72638] ">Home</span> / Blogs
        </p>
        <h2 className="text-[40px] font-semibold mt-1">Blogs</h2>
        </div>
      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE (Posts) */}
        <div className="lg:col-span-2 space-y-10 px-0 lg:px-12">
          {selectedPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl  overflow-hidden">
              {/* image + category */}
              <div className="relative">
               <img
  src={post.image}
  alt={post.title}
  className="w-full h-[300px] lg:h-[550px] object-cover lg:object-cover rounded-[16px]"
/>
   
              <span className="absolute  top-7 lg:top-3 left-3 bg-white text-[#050B20] text-[14px] font-medium  px-3 py-1 rounded-full shadow">
  {post.category}
</span>

              </div>

              {/* content */}
              <div className="p-4">
                <p className="text-[16px] text-[#050B20]">admin - {post.date}</p>
                <h2 className="text-[20px] font-semibold tetx-[#050B20] mt-1">{post.title}</h2>
                <p className="text-[#050B20] max-w-4xl text-[18px] mt-2">{post.desc}</p>
              
 
<button
  onClick={() => navigate(`/blog/${post.id}`)}
  className="flex items-center cursor-pointer gap-2 text-[#D72638] text-[18px] font-semibold mt-3"
>
  Read More
  <FiArrowUp className="text-[20px] text-[#D72638] rotate-[45deg]" />
</button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (Sidebar ثابت) */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h3 className="text--[18px] font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-[#050B20] text-[16px]">
              {categories.map((cat, idx) => (
                <li key={idx} className="hover:text-red-500 cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h3 className="text-[18px] font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2 max-w-52 ">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-red-100 text-[#D72638]  font-medium px-5 py-2 text-[13px] rounded-full cursor-pointer hover:bg-red-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PAGINATION BUTTONS تحت الصفحة */}
      <div className="flex justify-center items-center mt-12 gap-3">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`w-8 h-8 text-[15px] cursor-pointer rounded-full  font-medium ${
              currentPage === idx + 1 ? "bg-black text-white" : "bg-white "
            }`}
          >
            {idx + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-12 h-8 rounded-full bg-[#D9DADD]  cursor-pointer text-[15px] font-medium"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
