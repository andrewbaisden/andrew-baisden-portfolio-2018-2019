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

const MySQLAnimate = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 30%;
  }
`;

const MySQLBar = styled.div`
  background: var(--base-colour-green);
  max-width: 300px;
  width: 30%;
  height: 6px;
  animation: ${MySQLAnimate} 1s ease-out 0s;
`;

const SkillUsagePodUCL = () => (
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
            <p>MySQL</p>
            <div className="bar-bg">
              <MySQLBar />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SkillUsagePodUCL;
