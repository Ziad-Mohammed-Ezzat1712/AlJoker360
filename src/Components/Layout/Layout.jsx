// eslint-disable-next-line no-unused-vars
import React from 'react'
import NaveBar from '../NaveBar/NaveBar';

import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <>
      <NaveBar/>

      <div className=" ">
      <Outlet/>
      </div>
    <Footer/>
    </>
  )
}
