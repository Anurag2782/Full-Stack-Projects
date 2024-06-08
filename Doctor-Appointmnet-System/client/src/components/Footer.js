// Footer.js

import React from 'react';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{color:'black'}}>Contact Us</h4>
            <p>
              <FaEnvelope /> DocApp.com
            </p>
            <p>
              <FaPhone /> +1 (123) 456-7890
            </p>
          </div>
          <div className="col-md-6" >
            <h4 style={{color:'black'}}>Follow Us</h4>
            <p style={{color:'black'}}>Stay connected on social media:</p>
            <div className="social-icons">
              <a style={{margin : "10px"}} href="#facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a style={{margin : "10px"}} href="#twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a style={{margin : "10px"}} href="#linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p style={{color:'black'}}>&copy; 2024 DocApp | All rights reserved</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'rgb(30 249 249)',
  color: 'black',
  padding: '30px 30px',
  display: 'flex',
  alignItems:'center',
  justtifyContent: 'center',
  flexDirection: 'nowrap',
  fontFamily: 'sans-serif',
  fontWeight: '500',
  height : '250px'

};


export default Footer;
