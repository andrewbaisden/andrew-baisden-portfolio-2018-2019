import React from 'react';
import ReactDOM from 'react-dom';
import LinkedinPod from '../LinkedinPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkedinPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
