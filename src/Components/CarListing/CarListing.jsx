import React, { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import { FiArrowUp } from "react-icons/fi";
import { FaGasPump, FaTachometerAlt, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const ITEMS_PER_PAGE = 12;

const CarListing = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // استدعاء البيانات من ملف JSON في public
    axios
      .get("/cars.json")
      .then((res) => setCars(res.data))
      .catch((err) => console.error("Failed to load cars:", err));
  }, []);

  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCars = cars.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-white min-h-screen lg:mt-[-90px] lg:mb-[-80px] lg:rounded-[100px] py-10 px-4 md:px-10 relative z-40">
      {/* Breadcrumb and Heading */}
      <div className="mb-6">
        <p className="text-[20px] font-medium">
          <span className="text-[#D72638]">Home</span> / Our Cars
        </p>
        <h2 className="text-[40px] font-semibold mt-1">Our Cars</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-[20px] font-medium">
            Showing {startIndex + 1} –{" "}
            {Math.min(startIndex + ITEMS_PER_PAGE, cars.length)} of {cars.length} results
          </p>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm">
            <option>Default</option>
            <option>Price Low to High</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {currentCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl shadow p-2 flex flex-col relative border-[1px] border-gray-300"
          >
            {/* Bookmark */}
            <button className="absolute top-10 right-5 bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <Bookmark className="w-5 h-5 text-gray-700 cursor-pointer" />
            </button>

            {/* Image */}
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-[320px] object-cover rounded-lg"
            />

            {/* Info */}
            <h3 className="text-[20px] font-semibold text-[#050B20] mb-1">{car.title}</h3>
            <p className="text-[16px] text-[#050B20] mb-1">{car.description}</p>

            <div className="flex justify-around border-t border-b border-gray-300 py-4">
              <div>
                <FaTachometerAlt className="text-xl mx-auto mb-2 text-gray-700" />
                <p className="text-[16px]">{car.miles}</p>
              </div>

              <div>
                <FaGasPump className="text-xl mx-auto mb-2 text-gray-700" />
                <p className="text-[16px]">{car.fuel}</p>
              </div>

              <div>
                <FaCogs className="text-xl mx-auto mb-2 text-gray-700" />
                <p className="text-[16px]">{car.gear}</p>
              </div>
            </div>

            <div className="flex justify-between mt-5 items-center">
              <span className="text-[20px] font-semibold text-[#0A0A23]">${car.price}</span>
              <Link
                to={`/car/${car.id}`}
                className="text-[#D72638] font-medium text-[18px]"
              >
                <span className="flex gap-x-1 cursor-pointer">
                  View Details
                  <FiArrowUp className="text-[20px] text-[#D72638] mt-1 rotate-[45deg]" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-3">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`w-8 h-8 cursor-pointer rounded-full text-sm font-medium ${
              currentPage === idx + 1 ? "bg-black text-white" : "bg-white border"
            }`}
          >
            {idx + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-8 h-8 rounded-full bg-white border cursor-pointer text-sm font-medium"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default CarListing;
