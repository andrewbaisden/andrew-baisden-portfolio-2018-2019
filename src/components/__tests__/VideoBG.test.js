import React from 'react';
import ReactDOM from 'react-dom';
import VideoBG from '../VideoBG';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoBG />, div);
  ReactDOM.unmountComponentAtNode(div);
});
