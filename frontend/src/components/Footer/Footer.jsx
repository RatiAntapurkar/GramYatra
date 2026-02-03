import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">

                    <img src={assets.logo} alt="Logo" className="footer-logo" />
                    <p>Connecting Villagers To Grand Kumbha Mela</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Rati Antapurkar</li>
                        <li>About Us</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>+91 9699119409</li>
                        <li>ratiantapurkar001@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 &copy; GramYatra App. All Rights Reserved
            </p>
        </div>
    )
}

export default Footer