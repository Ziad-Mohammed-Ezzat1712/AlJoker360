import React from 'react'
import AboutSection1 from '../AboutSection1/AboutSection1'
import GraidSection from '../GraidSection/GraidSection'
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUsSection'
import AboutShow from '../AboutShow/AboutShow'
import AboutBrandsSection from '../AboutBrandsSection/AboutBrandsSection'
import Testimonials from '../Testimonials/Testimonials'
import AboutFaq from '../AboutFAQ/AboutFAQ'

export default function About() {
  return <>
   <div className="bg-white max-w-10xl xl:rounded-[60px] relative z-40 xl:mt-[-50px]  mt-[0px] mb-[-50px] mx-auto px-4 py-10 overflow-hidden">
  <AboutSection1/>
  <GraidSection/>
  <WhyChooseUsSection/>
  <AboutShow/>
  <AboutBrandsSection/>
  <Testimonials/>
  <AboutFaq/>
  
  </div>
  </>
}
