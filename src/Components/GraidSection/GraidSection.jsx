import React from "react";
import img1 from "../../../Images/offic1.jpg"; // الصورة الكبيرة (الراجل)
import img2 from "../../../Images/offic3.jpg"; // العربيات جوه المعرض
import img3 from "../../../Images/offic8.jpg"; // تسليم مفتاح
import img4 from "../../../Images/offic9.jpg"; // عربية جنبها عربية
import img5 from "../../../Images/offic5.jpg"; // تسليم المفتاح و اليدين

export default function GraidSection() {
  return (
    <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-4 xl:max-w-[1450px] xl:h-[428.79998779296875px] mx-auto">
      {/* المربع الأحمر - أول عنصر شمال فوق */}
      <div className="bg-[#D72638] relative xl:left-[30px] flex flex-col justify-center items-start text-white rounded-lg p-6 xl:col-start-1 xl:row-start-1 xl:max-w-64">
        <h2 className="text-[32px] font-bold">45</h2>
        <p className="text-[32px]  ">Years in Business</p>
      </div>

      {/* الصورة تحت المربع الأحمر */}
      <div className="rounded-lg relative xl:left-[30px] overflow-hidden xl:col-start-1 xl:row-start-2 xl:max-w-64">
        <img src={img3} alt="Handshake" className="w-full h-full object-fill " />
      </div>

      {/* الصورة الكبيرة (في النص) */}
      <div className="xl:col-span-2 xl:row-span-2 xl:col-start-2 xl:row-start-1 rounded-lg overflow-hidden max-w-4xl">
        <img src={img1} alt="Main" className="w-full h-full object-fill" />
      </div>

      {/* الصورة فوق يمين */}
      <div className="rounded-lg overflow-hidden xl:col-start-4 xl:row-start-1">
        <img src={img2} alt="Cars" className="w-full h-full object-fill" />
      </div>

      {/* تحت في العمود الأخير صورتين جنب بعض */}
      <div className="xl:flex xl:py-0 py-2 gap-4 xl:col-start-4 xl:row-start-2">
        <div className="rounded-lg xl:py-0 py-2 overflow-hidden xl:w-1/3">
          <img src={img4} alt="Key Hand" className="w-full h-full object-fill" />
        </div>
        <div className="rounded-lg xl:py-0 py-2 overflow-hidden xl:w-2/3">
          <img src={img5} alt="Car Back" className="w-full h-full object-fill" />
        </div>
      </div>
    </div>
  );
}
