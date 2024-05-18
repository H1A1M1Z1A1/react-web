import React from 'react'
import './Project.css'
import white_arrow from '../../assets/white-arrow.png'
import crypto_dashboard from '../../assets/crypto_dashboard.jpg'
import infinite_scroll from '../../assets/infinite_scroll.jpg'
import laravel_dashboard from '../../assets/laravel_dashboard.jpg'
import objectDetection from '../../assets/objectDetection.jpg'
import ProjectNavbar from './ProjectNav/ProjectNavbar'





const Project = () => {
  return (
    <>
    <ProjectNavbar/>
    <div className='project'>
      <div className="gallery">
        <div>
        <a href="/cryptoDashboard">
          <h2>Crypto Dashboard</h2>
          <br />
        <img src={crypto_dashboard} alt="" />
        </a>
        </div>

<div>
        <a href="/infiniteScroll">
        <h2>Infinite Scroll</h2>
          <br />
        <img className='infinite' src={infinite_scroll} alt="" />
        </a>        
        </div>


        <div className='outline-dotted h-72 mr-16'>
<h className='text-4xl' >Forms</h>

<a href="/form1">
<h2 className='form bg-green-300'>Form1</h2>
          

</a>
<a href="/form2">
<h2 className='form bg-blue-300'>Form2</h2>
          <br />

</a>
</div>


        <div>
<a href="https://github.com/H1A1M1Z1A1/Dashboard">
<h2>Dashboard</h2>
          <br />
<img src={laravel_dashboard} alt="" />
</a>        
</div>


<div>
<a href="https://github.com/H1A1M1Z1A1/object-detection--website">
<h2>Object Detection</h2>
          <br />
<img src={objectDetection} alt="" />
</a>
</div>



      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
    </>
  )
}

export default Project
