import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>
            I'm  Hamza  Husain 
            (Frontend Developer)
        </h1>
        <p>Results-driven and highly skilled Software and web developer with two years of
professional experience. Proven ability to design and implement dynamic/
responsive websites with a focus on user experience.</p>
      <button className='btn'>Download CV <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
