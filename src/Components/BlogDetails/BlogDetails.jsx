// BlogDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import blog1 from "../../../Images/blog1.jpg";
import blog2 from "../../../Images/blog2.jpg";
import blog3 from "../../../Images/blog3.jpg";
import blog4 from "../../../Images/blog4.jpg";
import blog5 from "../../../Images/blog5.jpg";
import blog6 from "../../../Images/blog6.jpg";
import admin from "../../../Images/admin.jpg";
import BlogDetailsSec from "../BlogDetailsSec/BlogDetailsSec";
import CommentsSection from "../CommentsSection/CommentsSection";
import RelatedPosts from "../RelatedPosts/RelatedPosts";

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

export default function BlogDetails() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="bg-white max-w-10xl xl:rounded-[60px] relative z-40 xl:mt-[-50px] mt-[-2px] mb-[-50px] mx-auto px-4 py-10">
    <div className="mb-6 xl:px-20 px-0">
        <p className="text-[20px] font-medium ">
          <span className="text-[#D72638] ">Home</span> / Blogs <span>/{post.title}</span>
        </p>
        <h2 className="text-[40px] font-semibold mt-1">Blogs</h2>
        </div>
    <div className="max-w-[1700px] mx-auto ">
     <div className="flex gap-x-3 mb-5 items-center"> <img src={admin} alt="admin" className=" w-10 h-10 rounded-full" />
      <p className="text-[18px]  font-medium text-[#050B20] ">admin - {post.date}</p></div>
      <img src={post.image} alt={post.title} className="w-full xl:h-[650px] xl:object-cover object-contain  rounded-2xl mb-6" />
    
    </div>
<BlogDetailsSec/> 
<CommentsSection/> 
<RelatedPosts/> 
    </div>
  );
}
