import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodOcado from '../SkillUsagePodOcado';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodOcado />, div);
  ReactDOM.unmountComponentAtNode(div);
});
