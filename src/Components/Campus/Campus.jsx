import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import crypto_dashboard from '../../assets/crypto_dashboard.jpg'
import infinite_scroll from '../../assets/infinite_scroll.jpg'
import laravel_dashboard from '../../assets/laravel_dashboard.jpg'
import objectDetection from '../../assets/objectDetection.jpg'





const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <a href="/cryptoDashboard">
          <h2>Crypto Dashboard</h2>
          <br />
        <img src={crypto_dashboard} alt="" />
        </a>

        <a href="/infiniteScroll">
        <h2>Infinite Scroll</h2>
          <br />
<img className='infinite' src={infinite_scroll} alt="" />
</a>        

<a href="https://github.com/H1A1M1Z1A1/Dashboard">
<h2>Dashboard</h2>
          <br />
<img src={laravel_dashboard} alt="" />
</a>        

<a href="https://github.com/H1A1M1Z1A1/object-detection--website">
<h2>Object Detection</h2>
          <br />
<img src={objectDetection} alt="" />
</a>
        {/* <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" /> */}
      </div>
      <a href="https://github.com/H1A1M1Z1A1/"><button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button></a>
    </div>
  )
}

export default Campus
