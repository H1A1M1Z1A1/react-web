import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <br />
            <h2>Experience</h2>
            <h4>Software Developer (Mega Infomatics)</h4>
            <p>May 2023 -  May 2024</p>
            <hr />
            <p>Worked on the development of a browser-based application using React  and javaScript resulting in a 20% increase in user engagement. Improved application performance by optimizing REST API calls and reducing load times resulting in a 15% increase in page speed</p>
<p>
<ul>
  <li >
   Developed new features and enhancements for the application using React  and JavaScript.

  </li>
  <li>
  Establish a connection between the backend Node.js server and the frontend by utilizing JWT tokens for authorization.

  </li>
  <li>
  Debugged and resolved application issues to improve user experience.
  </li>

</ul>
</p>
<br />
<h4>Software Developer (Reflexion.AI)</h4>
<p>April 2022 -April 2023</p>
            <hr />
<p>Worked on a large-scale web application using React  resulting in a 30% increase in user satisfaction. Developed and maintained backend services using Python and SQL resulting in a 40% reduction in downtime</p><p>
<ul>
  <li >
  Implemented and maintained backend services using python and SQL


  </li>
  <li>
  Optimized database queries resulting in a 40% reduction in downtime.


  </li>
  <li>
  Developed new features and enhancements for web applications using React and SQL.

  </li>

</ul>
</p>

           

        </div>

      
    </div>
  )
}

export default About
