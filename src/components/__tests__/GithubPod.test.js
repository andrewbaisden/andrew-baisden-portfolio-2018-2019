import React from 'react';
import ReactDOM from 'react-dom';
import GithubPod from '../GithubPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GithubPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
