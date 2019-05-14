import React from 'react';
import ReactDOM from 'react-dom';
import MediumPod from '../MediumPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MediumPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
