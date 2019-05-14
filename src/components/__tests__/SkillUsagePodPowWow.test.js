import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodPowWow from '../SkillUsagePodPowWow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodPowWow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
