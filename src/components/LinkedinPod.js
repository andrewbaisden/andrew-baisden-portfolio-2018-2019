import React from 'react';
import linkedinIcon from '../img/linkedinIcon.svg';

const EmailPod = () => (
  <a href="https://www.linkedin.com/in/andrew-baisden/" target="_blank" rel="noopener noreferrer nofollow">
    <div className="network-box network-box-bg-social">
      <div className="network-box-border network-box-border-colour-social" />
      <div>
        <h1>Linkedin</h1>
        <img src={linkedinIcon} alt="Linkedin" />
        <p>Andrew Baisden</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
