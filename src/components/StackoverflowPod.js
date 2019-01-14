import React from 'react';
import stackoverflowIcon from '../img/stackoverflowIcon.svg';

const EmailPod = () => (
  <a
    href="https://stackoverflow.com/users/3665610/andrew-baisden?tab=profile"
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <div className="network-box network-box-bg-developer">
      <div className="network-box-border network-box-border-colour-developer" />
      <div>
        <h1>Stackoverflow</h1>
        <img src={stackoverflowIcon} alt="Stackoverflow" />
        <p>Andrew Baisden</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
