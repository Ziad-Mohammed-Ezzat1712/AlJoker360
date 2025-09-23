import React, { useState } from "react";
import FAQ from "../../../Images/FAQ.png"; // ← غير المسار حسب مكان الصورة عندك
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutFaq() {
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
        "Can I arrange for financing by myself for a car purchased at Klaksat?",
      answer: "Yes, you can arrange your own financing independently if you prefer.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-[90%] px-6 md:px-16 py-12 mx-auto">
      {/* Title */}
      <div className="text-center mb-5">
      
        <p className="text-[40px] font-semibold">Frequently Asked Questions</p>
      </div>

      <div className="grid md:grid-cols-1 gap-8 items-start max-w-[750px] mx-auto">
      

        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" rounded-lg bg-[#F3F3F4] overflow-hidden"
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
                <div className="p-4 bg-gray-200 text-[16px]">{faq.answer}</div>
              )}
            </div>
          ))}


          
        </div>
        
      </div>
      
    </div>
  );
}

AboutFaq