import React from 'react';
import ReactDOM from 'react-dom';
import InstagramPod from '../InstagramPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InstagramPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
