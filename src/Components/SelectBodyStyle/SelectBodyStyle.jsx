// SelectBodyStyle.jsx
import React, { useContext } from "react";
import Sedan from "../../../Images/Sedan.jpg";
import Coupe from "../../../Images/Coupe.jpg";
import SUV from "../../../Images/SUV.jpg";
import Truck from "../../../Images/Truck.jpg";
import Hatchback from "../../../Images/Hatchback.jpg";
import Convertible from "../../../Images/Convertible.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Context
import { LanguageContext } from "../../Context/LanguageContext";

export default function SelectBodyStyle() {
  const { isArabic } = useContext(LanguageContext);

  const carTypes = [
    { name: isArabic ? "سيدان" : "Sedan", img: Sedan },
    { name: isArabic ? "كوبيه" : "Coupe", img: Coupe },
    { name: isArabic ? "دفع رباعي" : "SUV", img: SUV },
    { name: isArabic ? "شاحنة" : "Truck", img: Truck },
    { name: isArabic ? "هاتشباك" : "Hatchback", img: Hatchback },
    { name: isArabic ? "قابلة للتحويل" : "Convertible", img: Convertible },
  ];

  return (
    <div className="text-center py-10 bg-[#F9FAFB] overflow-hidden">
      <h2 className="text-[32px] md:text-[40px] font-semibold text-[#050B20] mb-10">
        {isArabic ? "اختر نوع السيارة" : "Select a Body Style"}
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={100}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 2.8 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5.8 },
          }}
        >
          {carTypes.map((car, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 object-contain"
                />
                <p className="mt-3 text-sm md:text-base font-semibold text-[#0A0A23]">
                  {car.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
