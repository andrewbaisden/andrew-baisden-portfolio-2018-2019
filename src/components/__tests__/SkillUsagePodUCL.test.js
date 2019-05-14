import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodUCL from '../SkillUsagePodUCL';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodUCL />, div);
  ReactDOM.unmountComponentAtNode(div);
});
