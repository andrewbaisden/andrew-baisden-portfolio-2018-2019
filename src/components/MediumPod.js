import React from 'react';
import mediumIcon from '../img/mediumIcon.svg';

const EmailPod = () => (
  <a href="https://medium.com/@andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
    <div className="network-box network-box-bg-social">
      <div className="network-box-border network-box-border-colour-social" />
      <div>
        <h1>Medium</h1>
        <img src={mediumIcon} alt="Medium" />
        <p>@andrewbaisden</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
