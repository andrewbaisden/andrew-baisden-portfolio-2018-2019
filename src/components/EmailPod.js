import React from 'react';
import emailIcon from '../img/emailIcon.svg';

const EmailPod = () => (
  <a href="mailto:andrewbaisden@gmail.com" target="_blank" rel="noopener noreferrer nofollow">
    <div className="network-box network-box-bg-social">
      <div className="network-box-border network-box-border-colour-social" />
      <div>
        <h1>Email</h1>
        <img src={emailIcon} alt="Email" />
        <p>andrewbaisden@gmail.com</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
