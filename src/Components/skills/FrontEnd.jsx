import React from 'react'
import { BsFiletypeScss } from 'react-icons/bs'
import {SiNextdotjs, SiStrapi, SiVitest} from 'react-icons/si'



function FrontEnd() {
  return (
    <div className="skills_content">
        <h3 className="skill_title">MERN Stack Developer</h3>
        <div className="skills_group grid">

        <div className="skills_data">
            <i className='bx bxl-html5' ></i>
            <h3 className="skills_name">HTML</h3>
        </div>

        <div className="skills_data">
            <i className='bx bxl-css3' ></i>
            <h3 className="skills_name">CSS</h3>
        </div>  

        <div className="skills_data">
            <i className='bx bxl-javascript skills_icon'></i>
            <h3 className="skills_name">JavaScript</h3>
        </div>  

        

        <div className="skills_data">
            <SiNextdotjs />
            <h3 className="skills_name">Next</h3>
        </div>  

        <div className="skills_data">
            <i className='bx bxl-react ' ></i>
            <h3 className="skills_name">React</h3>
        </div>

        <div className="skills_data">
            <i className='bx bxl-react' ></i>
            <h3 className="skills_name">React Router</h3>
        </div>

        <div className="skills_data">
            <i className='bx bxl-redux' ></i>
            <h3 className="skills_name">Redux & Toolkit</h3>
        </div> 

        <div className="skills_data">
            <SiStrapi />
            <h3 className="skills_name">Strapi</h3>
        </div> 

        <div className="skills_data">
            <i className="uil uil-cloud-database-tree"></i>
            <h3 className="skills_name">Api "fatch,axios"</h3>
        </div>

        <div className="skills_data">
            <SiVitest />
            <h3 className="skills_name">Vite Js</h3>
        </div>  

        <div className="skills_data">
            <BsFiletypeScss />
            <h3 className="skills_name">Scss</h3>
        </div>

        <div className="skills_data">
            <i className='bx bxl-nodejs' ></i>
            <h3 className="skills_name">Node JS</h3>
        </div>

        <div className="skills_data">
            <i className="uil uil-server-connection"></i>
            <h3 className="skills_name">Express JS</h3>
        </div> 

        <div className="skills_data">
            <i className='bx bxl-mongodb'></i>
            <h3 className="skills_name">Mongodb</h3>
        </div> 
        </div>
    </div>
  )
}

export default FrontEnd