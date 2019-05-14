import React from 'react';
import ReactDOM from 'react-dom';
import CheckAboutPage from '../CheckAboutPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckAboutPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
