import React from 'react'
import './footer.css'
import  myLogo from '../../assets/logo m logo only.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container"></div>
        <a href="Home">
            <img src={myLogo} alt="" className='footer_logo'/>
        </a>
        <div className="footer_links">
            <a href="#About">About</a>
            <a href="#Portfolio">Qualification</a>
            <a href="#Services">Services</a>
        </div>

        <div className="footer_social">
        <a href="https://www.facebook.com/profile.php?id=100009886530756" className="home_social_icone" target='_blank' rel="noreferrer">
          <i className="uil uil-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohamed-magdy-a6b356220/" className="home_social_icone" target='_blank' rel="noreferrer">
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/MohamedMagdy-git" className="home_social_icone" target='_blank' rel="noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
        </div>

        <div className="footer_copyright">
            <p className='footer_copyright-text'>© 2023 all rights reserved</p>
        </div>
        
    </footer>
  )
}

export default Footer
