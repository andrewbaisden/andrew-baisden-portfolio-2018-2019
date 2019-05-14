import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodMediaReach from '../SkillUsagePodMediaReach';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodMediaReach />, div);
  ReactDOM.unmountComponentAtNode(div);
});
