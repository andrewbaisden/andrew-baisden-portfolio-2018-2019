import React from 'react';
import logo from '../img/logo.svg';

// To automatically update the year date in the copyrights
const yearDate = new Date().getFullYear();

const Copyrights = () => (
  <div className="copyrights">
    <p>Design / Logo &copy; {yearDate} Andrew Baisden. All Rights Reserved. &reg;</p>
    <img src={logo} alt="Andrew Baisden" />
  </div>
);

export default Copyrights;
