import React from 'react';
import developIcon from '../img/developIcon.svg';
import designerIcon from '../img/designerIcon.svg';
import toolsIcon from '../img/toolsIcon.svg';
import logo from '../img/logo.svg';

const MyServicesPod = () => (
  <div className="my-services-container">
    <div className="my-services">
      <div className="services-developer">
        <h1>Services</h1>
        <img src={developIcon} alt="Developer" />
        <p>Developer</p>
      </div>

      <div className="services-designer">
        <h1>Services</h1>
        <img src={designerIcon} alt="Designer" />
        <p>Designer</p>
      </div>

      <div className="services-tools">
        <h1>Services</h1>
        <img src={toolsIcon} alt="Tools" />
        <p>Tools</p>
      </div>
    </div>

    <div className="services-logo">
      <img src={logo} alt="Andrew Baisden" />
    </div>
  </div>
);

export default MyServicesPod;
