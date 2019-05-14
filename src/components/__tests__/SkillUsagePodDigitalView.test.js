import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodDigitalView from '../SkillUsagePodDigitalView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodDigitalView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
