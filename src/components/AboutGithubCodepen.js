import React from 'react';
import githubIcon from '../img/githubIcon.svg';
import codepenIcon from '../img/codepenIcon.svg';

const AboutGithubCodepen = () => (
  <div className="developer-pod-container">
    <div className="github-codepen">
      <div className="github-work">
        <a href="https://github.com/andrewbaisden" target="_blank" rel="noopener noreferrer nofollow">
          <h1>Github</h1>
          <img src={githubIcon} alt="Github Logo" />
          <p>@andrewbaisden.com</p>
        </a>
      </div>
      <div className="codepen-work">
        <a href="https://codepen.io/andrewbaisden/#" target="_blank" rel="noopener noreferrer nofollow">
          <h1>Codepen</h1>
          <img src={codepenIcon} alt="Codepen Logo" />
          <p>@andrewbaisden.com</p>
        </a>
      </div>
    </div>
  </div>
);

export default AboutGithubCodepen;
