import './about.css'
import aboutImgdark from '../../assets/profile png.webp'
import { Info } from './Info'
import { useEffect, useState } from 'react'

export const About = () => {
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
   const imgvalueDarkmood = darkMode ? aboutImgdark : aboutImgdark;

   const startYear = 2023;
   function calculateExperience(startYear) {
     return new Date().getFullYear() - startYear;
   }

   return (
     <div className="about section" id='About'>
         <h2 className="section__title">About Me</h2>
         <span className='section__subtitle'>My introduction</span>

         <div className="about_contianer container grid">
             <img src={imgvalueDarkmood}
              loading="lazy"
                  width="400"
                  height="400"
                   alt="Profile" className={`about_img ${darkMode ? 'about_img-dark-mode' : ''}`} />
             <div className="about_data">
                 <Info experience={calculateExperience(startYear)}/>
                 <p className="about_discription">
                     Web Developer Computer science graduate, I create web pages with UI / UX user interface, 
                     I have {calculateExperience(startYear)} years of experience and many clients are happy with the projects carried out.
                 </p>
                 <a href="https://drive.google.com/file/d/1BbnLzcJ2y6vH7KK50l8SB0xoCSnlQgtt/view?usp=sharing"
                    target='_blank' rel="noreferrer"
                    className="about_downloadCv button button--flex">
                     Download CV
                 </a>
             </div>
         </div>
     </div>
   )
}
