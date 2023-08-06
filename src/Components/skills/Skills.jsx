import React from 'react'
import FrontEnd from './FrontEnd'
import { OtherSkills } from './OtherSkills'
import './skills.css'

export const Skills = () => {
  return (
    <div className="skills section" id='Skills'>
        <h2 className="section__title">Skills</h2>
        <span className='section__subtitle'>My technical level</span>

        <div className="skills_container container grid">
            <FrontEnd />

            <OtherSkills />
        </div>
    </div>
  )
}
