import React from 'react';
import EmailPod from './EmailPod';
import TwitterPod from './TwitterPod';
import InstagramPod from './InstagramPod';
import MediumPod from './MediumPod';
import GithubPod from './GithubPod';
import CodepenPod from './CodepenPod';
import JSFiddlePod from './JSFiddlePod';
import StackoverflowPod from './StackoverflowPod';
import Copyrights from './Copyrights';

const Footer = () => (
  <div>
    <div className="footer">
      <EmailPod />
      <TwitterPod />
      <InstagramPod />
      <MediumPod />
      <GithubPod />
      <CodepenPod />
      <JSFiddlePod />
      <StackoverflowPod />
    </div>
    <Copyrights />
  </div>
);

export default Footer;
