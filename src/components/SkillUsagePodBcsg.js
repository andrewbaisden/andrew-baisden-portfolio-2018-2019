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

const SassAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
`;

const SassBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 60%;
  height: 6px;
  animation: ${SassAnimate} 1s ease-out 0s;
`;

const JavascriptAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

const JavascriptBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 80%;
  height: 6px;
  animation: ${JavascriptAnimate} 1s ease-out 0s;
`;

const ReactAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
`;

const ReactBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 80%;
  height: 6px;
  animation: ${ReactAnimate} 1s ease-out 0s;
`;

const WordpressAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
`;

const WordpressBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 50%;
  height: 6px;
  animation: ${WordpressAnimate} 1s ease-out 0s;
`;

const SkillUsagePodBCSG = () => (
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
            <p>Sass</p>
            <div className="bar-bg">
              <SassBar />
            </div>
          </li>
          <li>
            <p>Javascript</p>
            <div className="bar-bg">
              <JavascriptBar />
            </div>
          </li>
          <li>
            <p>React</p>
            <div className="bar-bg">
              <ReactBar />
            </div>
          </li>
          <li>
            <p>Wordpress</p>
            <div className="bar-bg">
              <WordpressBar />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SkillUsagePodBCSG;
