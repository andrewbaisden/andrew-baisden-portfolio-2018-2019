import React from 'react';
import ReactDOM from 'react-dom';
import TwitterPod from '../TwitterPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TwitterPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
