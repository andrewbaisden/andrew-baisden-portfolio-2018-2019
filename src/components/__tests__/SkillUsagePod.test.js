import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePod from '../SkillUsagePod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
