import React from 'react';
import ReactDOM from 'react-dom';
import SkillUsagePodAndrewBaisden2014 from '../SkillUsagePodAndrewBaisden2014';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillUsagePodAndrewBaisden2014 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
