import React from 'react';
import styled, { keyframes } from 'styled-components';

const HTML5Animate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
`;

const HTML5Bar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 90%;
  height: 6px;
  animation: ${HTML5Animate} 1s ease-out 0s;
`;

const CSS3Animate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
`;

const CSS3Bar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 90%;
  height: 6px;
  animation: ${CSS3Animate} 1s ease-out 0s;
`;

const JavascriptAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
`;

const JavascriptBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 60%;
  height: 6px;
  animation: ${JavascriptAnimate} 1s ease-out 0s;
`;

const YeomanAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

const YeomanBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 80%;
  height: 6px;
  animation: ${YeomanAnimate} 1s ease-out 0s;
`;

const GruntAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

const GruntBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 80%;
  height: 6px;
  animation: ${GruntAnimate} 1s ease-out 0s;
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

const SkillUsagePodAndrewBaisden2014 = () => (
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
            <p>Yeoman</p>
            <div className="bar-bg">
              <YeomanBar />
            </div>
          </li>
          <li>
            <p>Grunt</p>
            <div className="bar-bg">
              <GruntBar />
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
        </ul>
      </div>
    </div>
  </div>
);

export default SkillUsagePodAndrewBaisden2014;
