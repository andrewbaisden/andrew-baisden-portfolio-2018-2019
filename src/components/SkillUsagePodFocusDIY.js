import React from 'react';
import styled, { keyframes } from 'styled-components';

const HTMLAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
`;

const HTMLBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 90%;
  height: 6px;
  animation: ${HTMLAnimate} 1s ease-out 0s;
`;

const CSSAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
`;

const CSSBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 90%;
  height: 6px;
  animation: ${CSSAnimate} 1s ease-out 0s;
`;

const JQueryAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
`;

const JQueryBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 60%;
  height: 6px;
  animation: ${JQueryAnimate} 1s ease-out 0s;
`;

const PhotoshopAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

const PhotoshopBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 80%;
  height: 6px;
  animation: ${PhotoshopAnimate} 1s ease-out 0s;
`;

const SkillUsagePodFocusDIY = () => (
  <div className="skills-container">
    <div className="skills">
      <div className="skills-usage">
        <h1>Technology Stack</h1>
        <ul>
          <li>
            <p>HTML</p>
            <div className="bar-bg">
              <HTMLBar />
            </div>
          </li>
          <li>
            <p>CSS</p>
            <div className="bar-bg">
              <CSSBar />
            </div>
          </li>
          <li>
            <p>JQuery</p>
            <div className="bar-bg">
              <JQueryBar />
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

export default SkillUsagePodFocusDIY;
