import React, { useState } from "react";
import FAQ from "../../../Images/FAQ.png"; // ← غير المسار حسب مكان الصورة عندك
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How can I apply for financing?",
      answer:
        "You can apply online on the checkout page after you have reserved your car. We have partnered with several financing institutions in order to provide you with flexible financing options. You will also be able to calculate your expected monthly installments online, depending on your preferred tenor, downpayment, and your choice of a plan type (with car sale ban, or without a car sale ban). Once you complete your online application, our team will process your application with the financing institutions and we will contact you to update you on the progress and status of your application.",
    },
    {
      question: "What documents are required to avail car financing?",
      answer: "You need to provide standard identification and financial documents as per the institution requirements.",
    },
    {
      question:
        "Can I arrange for financing by myself for a car purchased at Aljocker?",
      answer: "Yes, you can arrange your own financing independently if you prefer.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-[90%] px-6 md:px-16 py-12 mx-auto overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          <span className="text-[#D72638] text-[60px]">FAQ</span>
        </h2>
        <p className="text-[40px] font-semibold">Frequently Asked Questions</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src={FAQ}
            alt="Car"
            className="w-[464px] h-[360px] object-contain"
          />
        </div>

        {/* Right - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" rounded-lg bg-gray-100 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex text-[20px] justify-between items-center p-4 text-left font-semibold"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4  text-[16px]">{faq.answer}</div>
              )}
            </div>
          ))}

          {/* Bottom Button */}
          
        </div>
        
      </div>
      <div className="flex justify-center mt-6">
            <button className="bg-[#D72638] text-[18px] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
              For More Question
            </button>
          </div>
    </div>
  );
}
