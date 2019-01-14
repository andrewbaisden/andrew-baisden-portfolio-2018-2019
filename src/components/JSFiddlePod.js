import React from 'react';
import jsfiddleIcon from '../img/jsfiddleIcon.svg';

const EmailPod = () => (
  <a href="https://jsfiddle.net/user/andrewbaisden/fiddles/" target="_blank" rel="noopener noreferrer nofollow">
    <div className="network-box network-box-bg-developer">
      <div className="network-box-border network-box-border-colour-developer" />
      <div>
        <h1>JSFiddle</h1>
        <img src={jsfiddleIcon} alt="JSFiddle" />
        <p>Andrew Baisden</p>
      </div>
    </div>
  </a>
);

export default EmailPod;
