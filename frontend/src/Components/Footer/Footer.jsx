import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/Frontend_Assets/logo_big.png';
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png';
import pintester_icon from '../Assets/Frontend_Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section-about">
          <div className="footer-logo-wrapper">
            <img src={footer_logo} alt="Logo" className="footer-logo-img" />
            <h2 className="footer-logo-text">UrbanNest</h2>
          </div>
          <p className="footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="footer-section links">
          <h3>COMPANY</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>About us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>GET IN TOUCH</h3>
          <ul className="contact-list">
            <li>+1-000-000-0000</li>
            <li>urbannest@gmail.com</li>
          </ul>
          <div className="footer-social">
            <div className="icon-circle">
              <img src={instagram_icon} alt="Instagram" />
            </div>
            <div className="icon-circle">
              <img src={pintester_icon} alt="Pinterest" />
            </div>
            <div className="icon-circle">
              <img src={whatsapp_icon} alt="WhatsApp" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 super.dev - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
