import React from 'react'

export const Info = ({experience}) => {
  return (
        <div className="about_info grid">

          <div className="about_box">
            <i className="uil uil-award about_icone"></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">{experience} Year</span>
          </div>

          <div className="about_box">
            <i className="uil uil-briefcase-alt about_icone"></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">20 + Projects</span>
          </div>

          <div className="about_box">
            <i className='bx bx-support about_icone' ></i>
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">Online 24/7</span>
          </div>

        </div>
  )
}
