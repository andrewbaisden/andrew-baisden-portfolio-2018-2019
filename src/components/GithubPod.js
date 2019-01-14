import React from 'react';
import githubIcon from '../img/githubIcon.svg';

const EmailPod = () => (
  <a href="https://github.com/andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
    <div className="network-box network-box-bg-developer">
      <div className="network-box-border network-box-border-colour-developer" />
      <div>
        <h1>Github</h1>
        <img src={githubIcon} alt="Github" />
        <p>@andrewbaisden</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
