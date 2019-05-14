import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodBcsg from '../SkillUsagePodBcsg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodBcsg />, div);
  ReactDOM.unmountComponentAtNode(div);
});
