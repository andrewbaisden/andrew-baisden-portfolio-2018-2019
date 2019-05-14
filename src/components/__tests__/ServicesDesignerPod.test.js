import React from 'react';
import ReactDOM from 'react-dom';
import ServicesDesignerPod from '../ServicesDesignerPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ServicesDesignerPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
