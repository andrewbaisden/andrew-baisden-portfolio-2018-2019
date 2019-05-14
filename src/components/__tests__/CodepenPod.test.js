import React from 'react';
import ReactDOM from 'react-dom';
import CodepenPod from '../CodepenPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CodepenPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
