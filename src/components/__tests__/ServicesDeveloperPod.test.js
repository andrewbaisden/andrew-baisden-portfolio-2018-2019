import React from 'react';
import ReactDOM from 'react-dom';
import ServicesDeveloperPod from '../ServicesDeveloperPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ServicesDeveloperPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
