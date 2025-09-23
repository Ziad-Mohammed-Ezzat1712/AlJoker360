import React, { useState } from "react";
import blog1 from "../../../Images/blog1.jpg";
import blog2 from "../../../Images/blog2.jpg";
import blog3 from "../../../Images/blog3.jpg";
import blog4 from "../../../Images/blog4.jpg";
import blog5 from "../../../Images/blog5.jpg";
import blog6 from "../../../Images/blog6.jpg";
export default function RelatedPosts() {
  const posts = [
    {
      id: 1,
      image: blog1,
      author: "admin",
      date: "November 22, 2023",
      title: "BMW X6 M50i is designed to exceed your sportiest.",
    },
    {
      id: 2,
      image: blog2,
      author: "admin",
      date: "November 22, 2023",
      title: "BMW X6 M50i is designed to exceed your sportiest.",
    },
    {
      id: 3,
      image: blog3,
      author: "admin",
      date: "November 22, 2023",
      title: "BMW X6 M50i is designed to exceed your sportiest.",
    },
    {
      id: 4,
      image: blog4,
      author: "admin",
      date: "November 22, 2023",
      title: "BMW X6 M50i is designed to exceed your sportiest.",
    },
    {
      id: 5,
      image: blog5,
      author: "admin",
      date: "November 22, 2023",
      title: "BMW X6 M50i is designed to exceed your sportiest.",
    },
    {
      id: 6,
      image: blog6,
      author: "admin",
      date: "November 22, 2023",
      title: "BMW X6 M50i is designed to exceed your sportiest.",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Get current posts
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-10xl xl:px-20 mx-auto p-4">
      <h3 className="text-[20px] font-semibold mb-6">Related Posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <p className="text-[16px] text-[#838790] flex items-center gap-2">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </p>
              <h4 className="text-[18px] font-semibold  mt-2">{post.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
       

        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 rounded-full ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "border text-gray-600"
              }`}
            >
              {i + 1}
            </button>
          )
        )}

        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(posts.length / postsPerPage))
            )
          }
          className="w-12 h-8 rounded-full bg-[#D9DADD]  cursor-pointer text-[15px] font-medium"
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
        >
          →
        </button>
      </div>
    </div>
  );
}
