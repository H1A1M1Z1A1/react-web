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
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fff from './Components/Fff'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Hero/>
      <div className="container">
        <Title 
        subTitle='OUR PROGRAM'
        title='Skills'
        />
      <Programs/>
      <About/>
      <Title 
        subTitle='Gallery'
        title='Project (Campus)'
        />
        <Campus/>
        {/* <Title 
        subTitle='Testimonial'
        title='What Student says'
        />
        <Testimonials/> */}
        <Title 
        subTitle='Contact Us'
        title='Get in Touch'
        />
        <Contact/>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default App
