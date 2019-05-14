import React from 'react';
import ReactDOM from 'react-dom';
import MyServicesPod from '../MyServicesPod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyServicesPod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
