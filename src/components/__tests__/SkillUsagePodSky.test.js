import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodSky from '../SkillUsagePodSky';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodSky />, div);
  ReactDOM.unmountComponentAtNode(div);
});
