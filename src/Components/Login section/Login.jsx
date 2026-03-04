import React from 'react'
import './Login.css'
const Footer = () => {
  return (
    <div className="login">
        <div className="left">
            <h2>
                Wellcome Back
            </h2>
        </div>
        <div className="right">
            <div className="fullName">
                <div className="frist_name">
                    <label htmlFor="frist_Name">frist Name</label>
                    <input type="text" name="frist_Name" id="frist_Name" />
                </div>
                <div className="last_name">
                   <label htmlFor="Last_Name">Last Name</label>
                   <input type="text" name="" id="Last_Name" /> 
                </div>

            </div>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Register</button>
    </div>
  )
}

export default Footer
