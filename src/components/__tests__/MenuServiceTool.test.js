import React from 'react';
import ReactDOM from 'react-dom';
import MenuServiceTool from '../MenuServiceTool';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuServiceTool />, div);
  ReactDOM.unmountComponentAtNode(div);
});
