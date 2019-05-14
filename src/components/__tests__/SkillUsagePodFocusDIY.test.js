import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodFocusDIY from '../SkillUsagePodFocusDIY';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodFocusDIY />, div);
  ReactDOM.unmountComponentAtNode(div);
});
