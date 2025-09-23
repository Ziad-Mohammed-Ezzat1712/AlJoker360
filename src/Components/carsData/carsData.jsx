import elentra8 from "../../../public/Images/elentra8.jpg";
import mercedes from "../../../public/Images/mercedes.jpg";
import nissan from "../../../public/Images/nissan.jpg";
import kia from "../../../public/Images/Kia.jpg";
import kiaold from "../../../public/Images/Kiaold.jpg";
import mazda from "../../../public/Images/Mazda.jpg";
import elentranew from "../../../public/Images/elentranew.jpg";
import toyota from "../../../public/Images/Toyota.jpg";
import hyundaicreta from "../../../public/Images/HyundaiCreta.jpg";
import kiacarnival from "../../../public/Images/KiaCarnival.jpg";
import nissanpatrol from "../../../public/Images/NissanPatrol.jpg";
import hyundaipalisade from "../../../public/Images/HyundaiPalisade.jpg";
import bmw430i from "../../../public/Images/BMW430i.jpg";
import fordMustang from "../../../public/Images/Ford-Mustang.jpg";
import mercedesAMG from "../../../public/Images/Mercedes-AMG.jpg";
import bmwz4 from "../../../public/Images/bmwz4.avif";
import Renault from "../../../public/Images/Renault.jpg";
import ToyotaYaris from "../../../public/Images/ToyotaYaris.jpg";
import Chevrolet from "../../../public/Images/Chevrolet.jpg";
import Volkswagen from "../../../public/Images/Volkswagen.jpg";

const carsData = [
  {
    id: 1,
    title: "Elantra — 2024",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "15 Miles",
    fuel: "Petrol",
    gear: "CVT",
    price: 15000,
    image: elentra8,
  },
  {
    id: 2,
    title: "Mercedes C300-2020",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "12 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 45000,
    image: mercedes,
  },
  {
    id: 3,
    title: "Nissan Sentra -2023",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "25 Miles",
    fuel: "Petrol",
    gear: "Manual",
    price: 28000,
    image: nissan,
  },
  {
    id: 4,
    title: "Kia K5-2025",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "10 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 55000,
    image: kia,
  },
  {
    id: 5,
    title: "Kia K7-2020",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "22 Miles",
    fuel: "Hybrid",
    gear: "Auto",
    price: 32000,
    image: kiaold,
  },
  {
    id: 6,
    title: "Mazda 6-2019",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "25 Miles",
    fuel: "Petrol",
    gear: "Manual",
    price: 28000,
    image: mazda,
  },
  {
    id: 7,
    title: "Hyundai Accent-2025",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "10 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 55000,
    image: elentranew,
  },
  {
    id: 8,
    title: "Toyota Camry-2025",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "22 Miles",
    fuel: "Hybrid",
    gear: "Auto",
    price: 32000,
    image: toyota,
  },
  {
    id: 14,
    title: "Hyundai Creta-2025",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "22 Miles",
    fuel: "Hybrid",
    gear: "Auto",
    price: 32000,
    image: hyundaicreta,
  },
  {
    id: 15,
    title: "Kia Carnival-2024",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "25 Miles",
    fuel: "Petrol",
    gear: "Auto",
    price: 28000,
    image: kiacarnival,
  },
  {
    id: 16,
    title: "Nissan Patrol-2025",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "10 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 55000,
    image: nissanpatrol,
  },
  {
    id: 17,
    title: "Hyundai Palisade",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "22 Miles",
    fuel: "Hybrid",
    gear: "Auto",
    price: 32000,
    image: hyundaipalisade,
  },
  {
    id: 19,
    title: "BMW 430i-2024",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "15 Miles",
    fuel: "Petrol",
    gear: "CVT",
    price: 15000,
    image: bmw430i,
  },
  {
    id: 20,
    title: "Ford Mustang-2024",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "12 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 45000,
    image: fordMustang,
  },
  {
    id: 21,
    title: "Mercedes-AMG",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "25 Miles",
    fuel: "Petrol",
    gear: "Manual",
    price: 12000,
    image: mercedesAMG,
  },
  {
    id: 22,
    title: "BMW Z4-2025",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "10 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 5000,
    image: bmwz4,
  },
    {
    id: 23,
    title: "Renault Clio E-Tech Hybrid (2020)",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "10 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 5000,
    image: Renault,
  },
     {
    id: 24,
    title: "2021 Volkswagen Golf 8",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "10 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 5000,
    image: Volkswagen,
  },
     {
    id: 25,
    title: "2024 Toyota Yaris",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "10 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 5000,
    image: ToyotaYaris,
  },
     {
    id: 26,
    title: "Chevrolet Aveo LT 2023",
    description: "4.0 D5 PowerPulse Momentum...",
    miles: "10 Miles",
    fuel: "Diesel",
    gear: "Auto",
    price: 5000,
    image: Chevrolet,
  },
];

export default carsData;
