import React from 'react';
import ReactDOM from 'react-dom';
import StackoverflowPod from '../StackoverflowPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StackoverflowPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
