import React from 'react';
import ReactDOM from 'react-dom';
import ScrollStateTop from '../ScrollStateTop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScrollStateTop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
