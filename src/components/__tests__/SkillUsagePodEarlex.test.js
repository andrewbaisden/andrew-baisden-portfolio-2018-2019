import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodEarlex from '../SkillUsagePodEarlex';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodEarlex />, div);
  ReactDOM.unmountComponentAtNode(div);
});
