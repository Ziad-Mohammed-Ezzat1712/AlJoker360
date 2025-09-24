import React from 'react'
import HeroSlider from '../HeroSlider/HeroSlider'
import SelectBodyStyle from '../SelectBodyStyle/SelectBodyStyle'
import PlanYourTrip from '../PlanYourTrip/PlanYourTrip'
import MostSearchedCars from '../MostSearchedCars/MostSearchedCars'
import RecommendedeCars from '../RecommendedeCars/RecommendedeCars'
import GetStartSection from '../GetStartSection/GetStartSection'
import BookRideSection from '../BookRideSection/BookRideSection'
import FAQSection from '../FAQSection/FAQSection'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
export default function Home() {
  return <>
<div className=' overflow-x-hidden'>
    <Nav/>
  <HeroSlider/>
  <SelectBodyStyle/>
  <PlanYourTrip/>
  <MostSearchedCars/>
  <GetStartSection/>
  <RecommendedeCars/>
  <BookRideSection/>
  <FAQSection/>
  <Footer/>
</div>
  </>
}
