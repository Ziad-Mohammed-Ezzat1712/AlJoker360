import React from 'react';
import bg from "../../../Images/CarSlidar.png";

const BookingForm = () => (
  <div
    className="lg:h-[800px] bg-cover bg-bottom flex items-center xl:mt-[-50px]  mt-[0px] justify-center px-4"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="bg-white h-auto md:h-[488px] mx-auto my-14 bg-opacity-95 p-6 md:p-10 rounded-lg w-full max-w-[1650px] shadow-lg">
  <h3 className="text-[20px] font-semibold mb-6">Book a Car</h3>
  
  <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
    {/* Pickup + Drop Off Location */}
    <div className="md:col-span-6">
      <label className="block text-[16px] font-semibold mb-1">Pickup Location</label>
      <select className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2">
        <option>Dubai Airport T1</option>
      </select>
    </div>

    <div className="md:col-span-6">
      <label className="block text-[16px] font-semibold mb-1">Drop Off Location</label>
      <select className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2">
        <option>Dubai Airport T1</option>
      </select>
    </div>

    {/* 4 inputs in one row */}
    <div className="md:col-span-3">
      <label className="block text-[16px] font-semibold mb-1">Pickup Date</label>
      <input type="date" className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2" />
    </div>

    <div className="md:col-span-3">
      <label className="block text-[16px] font-semibold mb-1">Pick Time</label>
      <input type="time" className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2" />
    </div>

    <div className="md:col-span-3">
      <label className="block text-[16px] font-semibold mb-1">Drop Off Date</label>
      <input type="date" className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2" />
    </div>

    <div className="md:col-span-3">
      <label className="block text-[16px] font-semibold mb-1">Drop Off Time</label>
      <input type="time" className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2" />
    </div>

    {/* Category */}
    <div className="md:col-span-12">
      <label className="block text-[16px] font-semibold mb-1">Category</label>
      <select className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2">
        <option>Any</option>
      </select>
    </div>
  </div>

  {/* Search Button */}
  <button className="mt-6 w-full bg-[#D72638] hover:bg-red-700 text-white text-[20px] font-semibold py-5 rounded-md transition">
    Search
  </button>
</div>

  </div>
);

export default BookingForm;
