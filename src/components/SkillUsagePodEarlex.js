import React from 'react';
import styled, { keyframes } from 'styled-components';

const HTMLAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

const HTMLBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 80%;
  height: 6px;
  animation: ${HTMLAnimate} 1s ease-out 0s;
`;

const CSSAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

const CSSBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 80%;
  height: 6px;
  animation: ${CSSAnimate} 1s ease-out 0s;
`;

const FlashAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
`;

const FlashBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 60%;
  height: 6px;
  animation: ${FlashAnimate} 1s ease-out 0s;
`;

const Actionscript3Animate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
`;

const Actionscript3Bar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 40%;
  height: 6px;
  animation: ${Actionscript3Animate} 1s ease-out 0s;
`;

const PhotoshopAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
`;

const PhotoshopBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 90%;
  height: 6px;
  animation: ${PhotoshopAnimate} 1s ease-out 0s;
`;

const DrupalAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
`;

const DrupalBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 40%;
  height: 6px;
  animation: ${DrupalAnimate} 1s ease-out 0s;
`;

const InDesignAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
`;

const InDesignBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 60%;
  height: 6px;
  animation: ${InDesignAnimate} 1s ease-out 0s;
`;

const IllustratorAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
`;

const IllustratorBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 60%;
  height: 6px;
  animation: ${IllustratorAnimate} 1s ease-out 0s;
`;

const SkillUsagePodEarlex = () => (
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
            <p>Flash</p>
            <div className="bar-bg">
              <FlashBar />
            </div>
          </li>
          <li>
            <p>Actionscript 3</p>
            <div className="bar-bg">
              <Actionscript3Bar />
            </div>
          </li>
          <li>
            <p>Photoshop</p>
            <div className="bar-bg">
              <PhotoshopBar />
            </div>
          </li>
          <li>
            <p>Drupal</p>
            <div className="bar-bg">
              <DrupalBar />
            </div>
          </li>
          <li>
            <p>InDesign</p>
            <div className="bar-bg">
              <InDesignBar />
            </div>
          </li>
          <li>
            <p>Illustrator</p>
            <div className="bar-bg">
              <IllustratorBar />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SkillUsagePodEarlex;
