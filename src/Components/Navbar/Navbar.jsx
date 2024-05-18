import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import {Link} from 'react-scroll'
import menu_icon from "../../assets/menu-icon.png"


const Navbar = () => {
const [mobileMenu,setMobileMenu]=useState(false)
  const toggleMenu=()=>{

    mobileMenu?setMobileMenu(false):setMobileMenu(true)
  }

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setSticky(true):setSticky(false);

    })
  },[]);
  return (
    <nav className={`${sticky?'dark-nav':''} `}>

      <img src={logo} alt="" className='logo' />
      <p>Hamza</p>
      
      <ul className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to='hero' smooth={true} offset={false} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>

        <a href="/project"><li className='text-red-600'>Projects</li></a>
        {/* <ul>
                    <a href="/weather"><li>Weather API</li></a>
                    <li>service2
                        <ul>
                            <li>serviceA</li>
                            <li>serviceB</li>
                            <li>serviceC</li>
                        </ul>
                    </li>
                    <a href="/ecommerce"><li>Ecommerce(Redux)</li></a>
                    <a href="/infiniteScroll"><li>Infinite Scroll</li></a>


                    <a href="/imageSearch"><li>Image Search</li></a>

                </ul> */}


        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>



{/*         
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li> */}

      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
