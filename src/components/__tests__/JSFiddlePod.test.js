import React from 'react';
import ReactDOM from 'react-dom';
import JSFiddlePod from '../JSFiddlePod';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JSFiddlePod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
