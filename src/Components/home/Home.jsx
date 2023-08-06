import React from 'react'
import "./home.css"
import { Social } from './Social'
import { Data } from './Data'
import { ScrollDown } from './ScrollDown'

export const Home = () => {
  return (
    <section className='home section' id='Home'>
        <div className="home_container container grid">
            <div className="home_content grid">
                <Social />
                

                <Data />
                
                <div className="home_img"></div>
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}
