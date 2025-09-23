import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaGasPump, FaTachometerAlt, FaCogs } from "react-icons/fa";
import CarDetailsCalendar from "../CarDetailsCalendar/CarDetailsCalendar";
import carsData from "../carsData/carsData"; // استورد ملف الداتا
import cross from "../../../Images/cross.jpg"; import cross2 from "../../../Images/Convertible/Ford-Mustang.jpg";
export default function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const foundCar = carsData.find((c) => c.id === Number(id));
    setCar(foundCar);
    if (foundCar) {
      setSelectedImage(foundCar.image);
    }
  }, [id]);

  if (!car) {
    return <h2 className="text-center text-red-500 mt-20">Car not found</h2>;
  }

  return (
    <div className="bg-white min-h-screen lg:mt-[-80px] lg:mb-[-80px] lg:rounded-[100px] py-10 px-4 md:px-10 relative z-40">
      {/* Breadcrumb */}
      <div className="mb-6 xl:px-12">
        <p className="text-[20px] font-medium ">
          <span className="text-[#D72638] ">Home</span> / Car Details
        </p>
        <h2 className="text-[40px] font-semibold mt-1">{car.title}</h2>
      </div>

      {/* صورة + تفاصيل */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* الصور */}
        <div>
          <img
            src={selectedImage}
            alt={car.title}
            className="w-full h-[250px] md:h-[350px] object-cover rounded-lg shadow"
          />
        </div>

        {/* تفاصيل */}
        <div>
          <h2 className="text-xs md:text-sm font-bold text-gray-500">
            {car.title}
          </h2>
          <h1 className="text-xl md:text-2xl font-bold mt-2">{car.subtitle}</h1>
          <p className="text-sm md:text-base text-gray-600 mt-3">
            {car.description}
          </p>

          <p className="mt-4 font-semibold text-gray-700">
            Starting from{" "}
            <span className="text-red-600 font-bold">${car.price}</span>
          </p>
        </div>
      </div>

      {/* مواصفات */}
      <div className="max-w-7xl mx-auto flex justify-start border-t gap-x-6 border-b py-6 mt-6 text-sm md:text-base">
        <div className="text-center">
          <FaTachometerAlt className="mx-auto text-lg md:text-xl text-gray-700 mb-2" />
          <p>{car.miles}</p>
        </div>
        <div className="text-center">
          <FaGasPump className="mx-auto text-lg md:text-xl text-gray-700 mb-2" />
          <p>{car.fuel}</p>
        </div>
        <div className="text-center">
          <FaCogs className="mx-auto text-lg md:text-xl text-gray-700 mb-2" />
          <p>{car.gear}</p>
        </div>
      </div>

      {/* التقويم */}
      <div className="mt-8 max-w-3xl mx-auto">
        <CarDetailsCalendar />
      </div>

      {/* نموذج الحجز وباقي الأقسام */}
      {/* ... زي ما هو من الكود اللي عندك ... */}

      
      {/* نموذج الحجز */}
      <div className="max-w-7xl mx-auto mt-8 border rounded-lg p-6 bg-gray-50">
        <h3 className="font-semibold mb-4 text-base md:text-lg">
          Select the Dates for Pick Up and Drop Off
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm">Pickup Location</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Aljoker Office</option>
              <option>Dubai Marina</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm">Drop Off Location</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Dubai Airport T3</option>
              <option>Sharjah Airport</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm">Pickup Date</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Pickup Time</label>
            <input type="time" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Drop Off Date</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Drop Off Time</label>
            <input type="time" className="w-full border rounded px-3 py-2" />
          </div>
        </div>
        <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg">
          Book Now
        </button>
      </div>

     {/* مقالات + صور */} <div className="max-w-7xl mx-auto mt-8"> <div className="mb-8 space-y-6 md:space-y-9"> <h2 className="font-semibold text-lg md:text-xl"> Welcome to Aljoker: Your Premier Destination for Car Rental in Dubai </h2> <p className="text-sm md:text-base"> Welcome to Aljoker, your top choice to rent a car in Dubai. We are proud to offer exceptional car rental services that elevate your travel experience in Dubai to new heights. For explorers and travel enthusiasts, visiting Dubai is a must-do. The city is filled with attractions, from the world's tallest building to luxury shopping centers and stunning coastal views. Dubai is truly a must-visit destination for any traveler. </p> <p className="text-sm md:text-base"> When considering car rental Dubai, safety, reliability, and access to the latest models are essential. Aljoker excels in all these aspects. Our extensive fleet features the newest models, all meticulously maintained. We offer transparent and competitive pricing, so you can enjoy your Dubai adventure without hidden costs. Let Aljoker be your trusted partner for rent a car in Dubai and embark on an unforgettable journey. </p> <h2 className="font-semibold text-lg md:text-xl"> Why a Rental Car in Dubai Makes a Difference </h2> <p className="text-sm md:text-base"> Dubai is a city best explored with the freedom and flexibility of your own vehicle. Renting a car with Aljoker allows you to discover the city's wonders at your own pace. From iconic landmarks like the Burj Khalifa and Palm Jumeirah to hidden gems off the beaten path, rent a car in Dubai gives you the freedom to go wherever your adventure takes you. Avoid the constraints of public transportation schedules and enjoy the convenience of traveling on your own terms. </p> </div> <div className="max-w-7xl mx-auto"> <img src={cross2} alt="car_photo" className="mx-auto w-full max-w-3xl rounded-lg" /> </div> </div>

      {/* Advantages */} <div className="max-w-7xl mx-auto mt-8"> <div className="mb-8 space-y-6 md:space-y-9"> <h2 className="font-semibold text-lg md:text-xl"> Advantages of Renting a Car with Aljoker in Dubai (Dubai Rent a Car): </h2> <ul className="list-disc space-y-4 pl-5 text-sm md:text-base"> <li> <span className="font-semibold">Easy Pickup and Drop-off Locations</span>: Upon your arrival in Dubai, you can choose from multiple pickup and drop-off locations throughout the city... </li> <li> <span className="font-semibold">Extensive Fleet of Rental Cars</span>: Aljoker believes that quality car rental services should be accessible to everyone... </li> <li> <span className="font-semibold">Transparent Pricing</span>: Our transparent pricing policy means there are no hidden fees... </li> <li> <span className="font-semibold">Customer Satisfaction</span>: Customer satisfaction is reflected in our 24/7 customer support commitment... </li> <li> <span className="font-semibold">Safe and Reliable Car Rental Services</span>: Safety is our top priority at Aljoker... </li> <li> <span className="font-semibold">Insurance and Roadside Assistance</span>: To further enhance your rental experience, Aljoker includes comprehensive insurance coverage... </li> </ul> </div> <div className="max-w-7xl mx-auto"> <img src={cross} alt="car_photo" className="mx-auto w-full max-w-3xl rounded-lg" /> </div> </div>

      {/* Why Choose */} <div className="max-w-7xl mx-auto mt-8"> <div className="mb-8 space-y-6 md:space-y-9"> <h2 className="font-semibold text-lg md:text-xl"> Why Choose Aljoker for Car Rental in Dubai? </h2> <p className="text-sm md:text-base"> Aljoker is a trusted and reputable international company to rent a car in Dubai, UAE... </p> </div> </div>
    </div>
  );
}



