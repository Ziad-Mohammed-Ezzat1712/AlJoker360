// PlanYourTrip.jsx
import React, { useContext } from "react";
import caricon from "../../../Images/Car-Icon.png";
import driveicon from "../../../Images/Let's-Drive.png";
import contacticon from "../../../Images/Contact.png";

// Context
import { LanguageContext } from "../../Context/LanguageContext";

export default function PlanYourTrip() {
  const { isArabic } = useContext(LanguageContext);

  const steps = [
    {
      icon: caricon,
      title: isArabic ? "اختر السيارة" : "Select a Car",
      desc: isArabic
        ? "اختر السيارة التي تناسب احتياجاتك من حيث الحجم والمميزات وكفاءة الوقود. الحجز مسبقًا يضمن توافر السيارة وقد يوفر أسعار أفضل."
        : "Choose a vehicle that fits your requirements in terms of size, features and fuel efficiency. Booking in advance can secure availability and potentially better rates.",
    },
    {
      icon: driveicon,
      title: isArabic ? "لننطلق" : "Let's Drive",
      desc: isArabic
        ? "مبروك على استئجار سيارتك! قد بأمان ونتمنى لك وقتًا ممتعًا ولا يُنسى على الطريق! شكرًا لاختيارك Al Joker."
        : "Congratulations on renting your car! Drive safe and we wish you an unforgettable and enjoyable time on the road! Thank you for choosing Al Joker.",
    },
    {
      icon: contacticon,
      title: isArabic ? "تواصل مع المشغل" : "Contact Operator",
      desc: isArabic
        ? "سواء كان لديك أسئلة حول خدماتنا، أو تحتاج مساعدة بخصوص الحجز، أو تحتاج دعمًا أثناء فترة الإيجار، تواصل مع فريق خدمة العملاء لأي استفسارات."
        : "Whether you have questions about our services, need assistance with your booking, or require support during your rental, reach out to our customer service team for any inquiries or assistance.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 w-[90%] mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* العنوان الكبير */}
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#050B20] leading-snug text-center md:text-left">
          {isArabic ? "خطط رحلتك الآن" : "Plan Your trip now"}
        </h2>

        {/* العناصر */}
        <div className="max-w-3xl md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col text-center sm:text-left ${
                idx === 2 ? "col-span-1 sm:col-span-2" : ""
              }`}
            >
              <div className="mb-4 flex justify-center sm:justify-start">
                <img src={step.icon} alt="" className="w-[74px] h-[74px]" />
              </div>
              <h3 className="font-bold text-[20px] mb-2">{step.title}</h3>
              <p className="text-[16px] leading-relaxed text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
