import React from 'react'
import "./Programs.css"
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program_icon1 from '../../assets/program-icon-1.png'
import program_icon2 from '../../assets/program-icon-2.png'
import program_icon3 from '../../assets/program-icon-3.png'
import javascript from '../../assets/javascript.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import react from '../../assets/react.png'







const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={javascript} alt="" />
        <div className="caption">
            {/* <img src={program_icon1} alt="" /> */}
            <ul>
            <li>Promises</li>
            <li>Prototypes</li>
            <li>Callback</li>
            <li>Closure</li>
            <li>Hoisting</li>
            <li>Scope</li>

            </ul>


        </div>
      </div>
      <div className="program">
        <img src={react} alt="" />
        <div className="caption">
            {/* <img src={program_icon2} alt="" /> */}
            <ul>
            <li>Hooks</li>
            <li>StateManagement</li>
            <li>Redux</li>
            <li>Forms</li>
            <li>Routing</li>
            <li>CodeSplitting</li>

            </ul>
        </div>
      </div>      
      <div className="program">
        <img src={html} alt="" />
        <div className="caption">
            {/* <img src={program_icon3 } alt="" /> */}
            <ul>
            <li>Tags</li>
            <li>Inline</li>
            <li>Outline</li>
            <li>SEO</li>
            {/* <li>Animation</li>
            <li>@media</li> */}

            </ul>
        </div>
      </div>
      <div className="program">
        <img src={css} alt="" />
        <div className="caption">
            {/* <img src={program_icon3 } alt="" /> */}
            <ul>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Grid</li>
            <li>Flex</li>
            <li>Animation</li>
            <li>@media</li>

            </ul>
        </div>
      </div>
      {/* <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
            <img src={program_icon3 } alt="" />
            <p>Graduation Degree</p>
        </div>
      </div> */}
    </div>
  )
}

export default Programs
