import React from 'react'
import './Portfolio.css'
import Works from './works.jsx'
const Portfolio = () => {
  return (
    <div className='section' id='Portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className='section__subtitle'>Most recent work</span>
        
        <Works />

    </div>
  )
}

export default Portfolio