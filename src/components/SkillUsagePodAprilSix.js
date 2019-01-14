import React from 'react';
import styled, { keyframes } from 'styled-components';

const HTML5Animate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
`;

const HTML5Bar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 60%;
  height: 6px;
  animation: ${HTML5Animate} 1s ease-out 0s;
`;

const CSS3Animate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
`;

const CSS3Bar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 50%;
  height: 6px;
  animation: ${CSS3Animate} 1s ease-out 0s;
`;

const JavascriptAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
`;

const JavascriptBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 40%;
  height: 6px;
  animation: ${JavascriptAnimate} 1s ease-out 0s;
`;

const BootstrapAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

const BootstrapBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 80%;
  height: 6px;
  animation: ${BootstrapAnimate} 1s ease-out 0s;
`;

const PhotoshopAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
`;

const PhotoshopBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 50%;
  height: 6px;
  animation: ${PhotoshopAnimate} 1s ease-out 0s;
`;

const IllustratorAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
`;

const IllustratorBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 40%;
  height: 6px;
  animation: ${IllustratorAnimate} 1s ease-out 0s;
`;

const FlashAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
`;

const FlashBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 40%;
  height: 6px;
  animation: ${FlashAnimate} 1s ease-out 0s;
`;

const SkillUsagePodAprilSix = () => (
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
            <p>Javascript/jQuery</p>
            <div className="bar-bg">
              <JavascriptBar />
            </div>
          </li>
          <li>
            <p>Twitter Bootstrap</p>
            <div className="bar-bg">
              <BootstrapBar />
            </div>
          </li>
          <li>
            <p>Photoshop</p>
            <div className="bar-bg">
              <PhotoshopBar />
            </div>
          </li>
          <li>
            <p>Illustrator</p>
            <div className="bar-bg">
              <IllustratorBar />
            </div>
          </li>
          <li>
            <p>Flash</p>
            <div className="bar-bg">
              <FlashBar />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SkillUsagePodAprilSix;
