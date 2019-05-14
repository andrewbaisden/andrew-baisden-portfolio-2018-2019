import React from 'react';
import ReactDOM from 'react-dom';
import LogoBtn from '../LogoBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogoBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
