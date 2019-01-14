import React from 'react';
import instagramIcon from '../img/instagramIcon.svg';

const EmailPod = () => (
  <a href="https://www.instagram.com/andrewbaisden/" target="_blank" rel="noopener noreferrer nofollow">
    <div className="network-box network-box-bg-social">
      <div className="network-box-border network-box-border-colour-social" />
      <div>
        <h1>Instagram</h1>
        <img src={instagramIcon} alt="Email" />
        <p>@andrewbaisden</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
