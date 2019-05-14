import React from 'react';
import ReactDOM from 'react-dom';
import MenuServicesDev from '../MenuServicesDev';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuServicesDev />, div);
  ReactDOM.unmountComponentAtNode(div);
});
