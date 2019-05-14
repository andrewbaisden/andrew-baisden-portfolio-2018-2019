import React from 'react';
import ReactDOM from 'react-dom';
import EmailPod from '../EmailPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
