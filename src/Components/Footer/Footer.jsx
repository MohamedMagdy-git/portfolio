import React, { useEffect } from 'react'
import './footer.css'
import  myLogo from '../../assets/logo updated.svg'
import { SlSocialFacebook, SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";

const Footer = () => {
  let currentYear = new Date().getFullYear();
   useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Allura&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <footer className="footer">
        <div className="footer_container container"></div>
       
        <div className="footer_links">
            <a href="#About">About</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Services">Services</a>
        </div>

        <div className="footer_social">
        <a href="https://www.facebook.com/profile.php?id=100009886530756" className="home_social_icone" target='_blank' rel="noreferrer">
          <SlSocialFacebook className="home_social_icone" />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-magdy-293567357/" className="home_social_icone" target='_blank' rel="noreferrer">
          <SlSocialLinkedin className="home_social_icone" />
        </a>
        <a href="https://github.com/MohamedMagdy-git" className="home_social_icone" target='_blank' rel="noreferrer">
          <SlSocialGithub className="home_social_icone" />
        </a>
        </div>
        
        <a href="Home">
            {/* <img src={myLogo} alt="" className='footer_logo'/> */}
             <p style={{ fontFamily: "Allura, cursive" }} className="signature"> Mohamed Magdy</p>
        </a>

        <div className="footer_copyright">
            <p className='footer_copyright-text'>© {currentYear} all rights reserved</p>
        </div>
        
    </footer>
  )
}

export default Footer
