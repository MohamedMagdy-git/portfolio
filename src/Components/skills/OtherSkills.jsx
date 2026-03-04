import React from 'react'
import { LuBrainCircuit } from "react-icons/lu";
import { SiMaterialdesign } from 'react-icons/si'
import { IoCodeWorkingOutline } from "react-icons/io5";

export const OtherSkills = () => {
  return (
    <div className="skills_content">
        <h3 className="skill_title">Other Skills</h3>

        <div className="skills_group grid">

        <div className="skills_data">
            <SiMaterialdesign />
            <h3 className="skills_name">Material Design</h3>
        </div>

        <div className="skills_data">
            <i className='bx bxl-bootstrap '></i>
            <h3 className="skills_name">Bootstrap</h3>
        </div>

        <div className="skills_data">
            <i className='bx bxl-tailwind-css '></i>
            <h3 className="skills_name">Tailwind</h3>
        </div>  

        <div className="skills_data">
            <i className="uil uil-sync"></i>
            <h3 className="skills_name">Agile</h3>
        </div>

        <div className="skills_data">
            <i className='bx bxl-git'></i>
            <h3 className="skills_name">git</h3>
        </div>

        <div className="skills_data">
            <i className="uil uil-brackets-curly"></i>
            <h3 className="skills_name">SDLC</h3>
        </div>  


        <div className="skills_data">
            <i className="uil uil-chart-growth"></i>
            <h3 className="skills_name">Waterfall</h3>
        </div>

        <div className="skills_data">
            <i className='bx bxl-python'></i>
            <h3 className="skills_name">python</h3>
        </div> 


        <div className="skills_data">
            <i className='bx bx-badge-check'></i>
            <h3 className="skills_name">Data structure</h3>
        </div>  

        <div className="skills_data">
            <i className='bx bx-palette' ></i>
            <h3 className="skills_name">Design patterns</h3>
        </div> 

        <div className="skills_data">
            <i className="uil uil-image-edit"></i>
            <h3 className="skills_name">Photoshop</h3>
        </div> 

        <div className="skills_data">
            <i className="uil uil-image-edit"></i>
            <h3 className="skills_name">Illustrator</h3>
        </div> 

        <div className="skills_data">
            <IoCodeWorkingOutline  className='bx bx-fade-right'/>
            <h3 className="skills_name">Always Learning</h3>
        </div>  
        
        <div className="skills_data">
            <LuBrainCircuit className='icone bx-fade-right'/>
            <h3 className="skills_name">Adapt to Project</h3>
        </div> 

        </div>
    </div>
  )
}
