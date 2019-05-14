import React from 'react';
import ReactDOM from 'react-dom';
import AboutPod from '../AboutPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
