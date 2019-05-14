import React from 'react';
import ReactDOM from 'react-dom';
import CheckHomePage from '../CheckHomePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckHomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
