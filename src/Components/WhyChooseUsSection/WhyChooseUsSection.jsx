import React from "react";
import { Link } from "react-router-dom";
import offer from "../../../Images/offer.png"
import Trusted from "../../../Images/Trusted.png"
import Pricing from "../../../Images/Pricing.png"
import ExpertService from "../../../Images/ExpertService.png"
export default function WhyChooseUsSection() {

  const services = [
    {
      title: "Exclusive Offers",
      image:offer,
      description:
        "Enjoy special deals and discounts you won’t find anywhere else.",
    },
    {
      title: "Trusted Dealer",
      image: Trusted,
      description:
        "We create professional marketing campaigns to boost your visibility and convert your audience into customers.",
    },
    {
      title: "Clear Pricing",
      image: Pricing,
      description:
        "We offer transparent rates with no hidden fees, so you always know exactly what you’re paying for.",
    },
     {
      title: "Expert Service",
      image: ExpertService,
      description:
        "Our experienced team is ready to provide top-quality service and meet all your rental needs.",
    },
  ];

  return (
    <>
  

    
      <section className="py-16 max-w-[1450px] mx-auto bg-gray-50" id="services">
        <div className="container mx-auto px-4 text-center">
          <div className="grid gap-8 md:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white shadow-md rounded-2xl p-6 hover:bg-[#f8f8f8]  transition duration-300 flex flex-col items-left text-left"
              >
                <img
                  src={service.image}
                  className="w-[80px] h-[80px] flex   mb-5 transition"
                  alt={service.title}
                />
                <h3 className="text-[18px] font-semibold mb-2 text-left">{service.title}</h3>
                <p className="text-[16px]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </>
  );
}

  