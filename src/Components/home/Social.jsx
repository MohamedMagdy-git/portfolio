import React from 'react'
import { SlSocialFacebook, SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";


export const Social = () => {
  return (
    <div className="home_social">
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
  )
}
