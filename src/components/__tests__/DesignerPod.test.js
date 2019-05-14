import React from 'react';
import ReactDOM from 'react-dom';
import DesignerPod from '../DesignerPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DesignerPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
