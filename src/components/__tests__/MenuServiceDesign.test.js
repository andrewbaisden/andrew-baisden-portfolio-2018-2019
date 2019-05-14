import React from 'react';
import ReactDOM from 'react-dom';
import MenuServiceDesign from '../MenuServiceDesign';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuServiceDesign />, div);
  ReactDOM.unmountComponentAtNode(div);
});
