import React from 'react';
import ReactDOM from 'react-dom';
import DeveloperPod from '../DeveloperPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeveloperPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
