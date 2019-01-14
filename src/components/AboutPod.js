import React from 'react';
import SkillUsagePod from '../components/SkillUsagePod';
import MyServicesPod from '../components/MyServicesPod';
import AboutCopyPod from '../components/AboutCopyPod';
import AboutTechStack from '../components/AboutTechStack';
import AboutGithubCodepen from '../components/AboutGithubCodepen';

const AboutPod = () => (
  <div>
    <AboutCopyPod />
    <AboutGithubCodepen />
    <AboutTechStack />
    <div className="about-pod-container">
      <div className="services-pod">
        <SkillUsagePod />
        <MyServicesPod />
      </div>
    </div>
  </div>
);

export default AboutPod;
