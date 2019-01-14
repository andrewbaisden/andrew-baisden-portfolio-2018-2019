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
    width: 60%;
  }
`;

const CSS3Bar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 60%;
  height: 6px;
  animation: ${CSS3Animate} 1s ease-out 0s;
`;

const PhotoshopCCAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
`;

const PhotoshopCCBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 70%;
  height: 6px;
  animation: ${PhotoshopCCAnimate} 1s ease-out 0s;
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

const JavascriptAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
`;

const JavascriptBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 50%;
  height: 6px;
  animation: ${JavascriptAnimate} 1s ease-out 0s;
`;

const DoubleClickAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
`;

const DoubleClickBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 50%;
  height: 6px;
  animation: ${DoubleClickAnimate} 1s ease-out 0s;
`;

const AdobeCampaignAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
`;

const AdobeCampaignBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 70%;
  height: 6px;
  animation: ${AdobeCampaignAnimate} 1s ease-out 0s;
`;

const SkillUsagePodSky = () => (
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
            <p>Photoshop CC</p>
            <div className="bar-bg">
              <PhotoshopCCBar />
            </div>
          </li>
          <li>
            <p>Flash</p>
            <div className="bar-bg">
              <FlashBar />
            </div>
          </li>
          <li>
            <p>Javascript</p>
            <div className="bar-bg">
              <JavascriptBar />
            </div>
          </li>
          <li>
            <p>DoubleClick</p>
            <div className="bar-bg">
              <DoubleClickBar />
            </div>
          </li>
          <li>
            <p>Adobe Campaign</p>
            <div className="bar-bg">
              <AdobeCampaignBar />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SkillUsagePodSky;
