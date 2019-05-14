import React from 'react';
import ReactDOM from 'react-dom';
import AboutCopyPod from '../AboutCopyPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutCopyPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
