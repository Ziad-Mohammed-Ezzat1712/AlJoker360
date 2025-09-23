import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import OurCar from './Components/OurCar/OurCar';
import BlogPage from './Components/BlogPage/BlogPage';
import About from './Components/About/About';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Brands from './Components/Brands/Brands';
import ContactUs from './Components/ContactUs/ContactUs';
import { LanguageProvider  } from './Context/LanguageContext';
import YourOrder from './Components/YourOrder/YourOrder';
import CarDetail from './Components/CarDetail/CarDetail';








// eslint-disable-next-line no-unused-vars
let x = createBrowserRouter([
  {path : "" , element:<Layout/>,children:[
    {path : "ourcars",element:<OurCar/> },
    {path : "blog",element:<BlogPage/> },
    {path : "about",element:<About/> },
    {path : "contact",element:<ContactUs/> },
    {path : "contact2",element:<ContactUs/> },
    {path : "yourorder",element:<YourOrder/> },
    {path : "/car/:id",element:<CarDetail/> },
    {path : "brands",element:<Brands/> },
    {path : "/blog/:id",element:<BlogDetails /> },
  ]},
{index : true,element:<Home/>}]

)

function App() {


  return(
  
  <>

 <LanguageProvider >
      <RouterProvider router={x}></RouterProvider>
 </LanguageProvider >
  </>
  )
}

export default App;
