import React from 'react';
import reactLogo from '../img/reactLogo.png';

const SkillUsagePod = () => (
  <div className="skills-container">
    <div className="skills">
      <div className="skills-heading">
        <p>This website is powered by</p>
        <img src={reactLogo} alt="React JS" />
      </div>
      <div className="skills-usage">
        <h1>Technology Stack</h1>
        <ul>
          <li>
            <p>HTML5</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-html5" />
            </div>
          </li>
          <li>
            <p>CSS3</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-css3" />
            </div>
          </li>
          <li>
            <p>Stylus</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-stylus" />
            </div>
          </li>
          <li>
            <p>JavaScript ES2015</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-javascript" />
            </div>
          </li>
          <li>
            <p>React</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-react" />
            </div>
          </li>
          <li>
            <p>NodeJS/npm</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-nodejs" />
            </div>
          </li>
          <li>
            <p>Webpack</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-webpack" />
            </div>
          </li>
          <li>
            <p>GIT</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-git" />
            </div>
          </li>
          <li>
            <p>Photoshop CC</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-photoshop" />
            </div>
          </li>
          <li>
            <p>Sketch</p>
            <div className="bar-bg">
              <div className="bar-bg-inner-about-sketch" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SkillUsagePod;
