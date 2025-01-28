import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="social">
      <a href="#"><i className='bx bxl-facebook-circle'></i></a>
      <a href="#"><i className='bx bxl-linkedin-square'></i></a>
      <a href="#"><i className='bx bxl-twitter'></i></a>
      <a href="#"><i className='bx bxl-instagram-alt'></i></a>
    </div>
    <ul className="list">
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About Me</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>
    <p className="copyright">@ 2024 Ishu | All Rights Reserved</p>
  </footer>
);

export default Footer;
