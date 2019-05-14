import React from 'react';
import ReactDOM from 'react-dom';
import CheckContactPage from '../CheckContactPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckContactPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
