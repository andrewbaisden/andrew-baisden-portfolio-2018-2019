import React from 'react';
import styled, { keyframes } from 'styled-components';

const HTML5Animate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
`;

const HTML5Bar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 70%;
  height: 6px;
  animation: ${HTML5Animate} 1s ease-out 0s;
`;

const CSS3Animate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
`;

const CSS3Bar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 70%;
  height: 6px;
  animation: ${CSS3Animate} 1s ease-out 0s;
`;

const PhotoshopAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
`;

const PhotoshopBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 70%;
  height: 6px;
  animation: ${PhotoshopAnimate} 1s ease-out 0s;
`;

const SkillUsagePodOcado = () => (
  <div className="skills-container">
    <div className="skills">
      <div className="skills-usage">
        <h1>Technology Stack</h1>
        <ul>
          <li>
            <p>HTML5</p>
            <div className="bar-bg">
              <HTML5Bar />
            </div>
          </li>
          <li>
            <p>CSS3</p>
            <div className="bar-bg">
              <CSS3Bar />
            </div>
          </li>
          <li>
            <p>Photoshop</p>
            <div className="bar-bg">
              <PhotoshopBar />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SkillUsagePodOcado;
