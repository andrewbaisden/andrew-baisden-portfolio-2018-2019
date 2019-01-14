import React from 'react';
import twitterIcon from '../img/twitterIcon.svg';

const EmailPod = () => (
  <a href="https://twitter.com/andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
    <div className="network-box network-box-bg-social">
      <div className="network-box-border network-box-border-colour-social" />
      <div>
        <h1>Twitter</h1>
        <img src={twitterIcon} alt="Email" />
        <p>@andrewbaisden</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
