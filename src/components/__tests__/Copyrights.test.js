import React from 'react';
import ReactDOM from 'react-dom';
import Copyrights from '../Copyrights';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Copyrights />, div);
  ReactDOM.unmountComponentAtNode(div);
});
