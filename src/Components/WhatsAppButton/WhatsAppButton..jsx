// src/components/WhatsAppButton.jsx
import React from 'react';
import whatsappIcon from '../../../Images/whatsapp.png'; // أو استخدم لينك مباشر

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/201507779771', '_blank'); // عدّل الرقم
  };

  return (
    <div
      onClick={handleClick}
      className=" absolute  top-100 right-0 z-50 cursor-pointer  hover:bg-[#5FD669] text-white px-6 py-2 rounded-full flex items-center transition-all duration-300 group hover:pr-5"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-16 h-16 hover:w-10 hover:h-10"
      />
      <span
        className="ml-2 max-w-0 font-bold overflow-hidden opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
      >
        WhatsApp us
      </span>
    </div>
  );
};

export default WhatsAppButton;
