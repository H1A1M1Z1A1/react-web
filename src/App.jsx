import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Weather from './Components/Projects/Weather'
import ImageSearch from './Components/Projects/ImageSearch'
import InfiniteScroll from './Components/Projects/InfiniteScroll/InfiniteScroll'
import CryptoDashboard from './Components/Projects/CryptoDashboard/CryptoDashboard'
import Form1 from './Components/Projects/Forms/Form1'
import Form2 from './Components/Projects/Forms/Form2'
import Project from './Components/Projects/Project'



import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// import EcommerceCart from './Components/Projects/Ecommerce_redux/EcommerceCart'

// import { Provider } from "react-redux";
// import { store } from './Components/Projects/Ecommerce_redux/redux/app/store';
// import CartDetails from './Components/Projects/Ecommerce_redux/Components/CardDetails'

// projects\src\Components\Projects\Ecommerce_redux\Components\CardDetails.jsx
//                              /Components/Projects/Ecommerce_redux/Ecommerce_cart.jsx

import Start from './Start'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fff from './Components/Fff'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      

      
      {/* <Route path="/" element={<Home />} /> */}
    {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/fff" element={<Fff/>} />
        
        <Route path="/weather" element={<Weather/>} />
        <Route path="/imageSearch" element={<ImageSearch/>} />
        <Route path="/infiniteScroll" element={<InfiniteScroll/>} />
        <Route path="/cryptoDashboard" element={<CryptoDashboard/>} />
        <Route path="/form1" element={<Form1/>} />
        <Route path="/form2" element={<Form2/>} />
        <Route path="/project" element={<Project/>} />





        {/* <Route path="/ecommerce" element={<EcommerceCart/>} />
        <Route path='/cart' element={<CartDetails/>}  /> */}
      </Routes>
      {/* </Provider> */}

      <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default App
