 import React from 'react'
 import './Footer.css'
 import youtubeIcon   from '../../assets/youtube_icon.png'
 import facebookIcon  from '../../assets/facebook_icon.png'
 import instagramIcon from '../../assets/instagram_icon.png'
 import twitterIcon   from '../../assets/twitter_icon.png'

 
 function Footer() {
   return (
     <div className='footer'>
        <div className="footer-icons">
          <img src={youtubeIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={instagramIcon} alt="" />
        </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center </li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefernces</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className='copyright-text'>© 1997-2023 Netflix, Inc.</p>

     </div>
   )
 }
 
 export default Footer