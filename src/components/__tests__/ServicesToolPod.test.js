import React from 'react';
import ReactDOM from 'react-dom';
import ServicesToolPod from '../ServicesToolPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ServicesToolPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
