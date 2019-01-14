import React from 'react';
import codepenIcon from '../img/codepenIcon.svg';

const EmailPod = () => (
  <a href="https://codepen.io/andrewbaisden/#" target="_blank" rel="noopener noreferrer nofollow">
    <div className="network-box network-box-bg-developer">
      <div className="network-box-border network-box-border-colour-developer" />
      <div>
        <h1>Codepen</h1>
        <img src={codepenIcon} alt="CodePen" />
        <p>@andrewbaisden</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
