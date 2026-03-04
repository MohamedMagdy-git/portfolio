import React, { useEffect, useState } from 'react'
import "./home.css"
import { Social } from './Social'
import { Data } from './Data'
import { ScrollDown } from './ScrollDown'

export const Home = () => {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmo') === "true");

   useEffect(() => {
     const handleDarkModeChange = () => {
       setDarkMode(localStorage.getItem('darkmo') === "true");
     };

     //  استمع للحدث المخصص
     window.addEventListener("darkModeChanged", handleDarkModeChange);

     return () => {
       window.removeEventListener("darkModeChanged", handleDarkModeChange);
     };
   }, []);

   //  تحديث الصورة حسب الوضع الليلي
   const imgvalueDarkmood = darkMode ? "home_img_dark" : "home_img";

  return (
    <section className='home section' id='Home'>
        <div className="home_container container grid">
            <div className="home_content grid">
                <Social />
                

                <Data />
                
                <div className={imgvalueDarkmood}></div>
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}
