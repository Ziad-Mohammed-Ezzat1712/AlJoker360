import React from 'react'
import BookingForm from '../BookingForm/BookingForm'
import CarListing from '../CarListing/CarListing'

export default function OurCar() {
  return (
    <>
    <div className="relative z-40">
      <BookingForm  />
      </div>
     <div className="relative lg:z-40">
  <CarListing />
</div>

    </>
  )
}
