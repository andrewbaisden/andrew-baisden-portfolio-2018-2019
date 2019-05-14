import React from 'react';
import ReactDOM from 'react-dom';
import AboutBtn from '../AboutBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
