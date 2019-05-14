import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodAprilSix from '../SkillUsagePodAprilSix';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodAprilSix />, div);
  ReactDOM.unmountComponentAtNode(div);
});
