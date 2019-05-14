import React from 'react';
import ReactDOM from 'react-dom';
import AboutGithubCodepen from '../AboutGithubCodepen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutGithubCodepen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
