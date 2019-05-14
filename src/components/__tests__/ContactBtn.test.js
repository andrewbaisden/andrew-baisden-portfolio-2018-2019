import React from 'react';
import ReactDOM from 'react-dom';
import ContactBtn from '../ContactBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
