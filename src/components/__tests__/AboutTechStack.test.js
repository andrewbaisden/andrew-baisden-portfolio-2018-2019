import React from 'react';
import ReactDOM from 'react-dom';
import AboutTechStack from '../AboutTechStack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutTechStack />, div);
  ReactDOM.unmountComponentAtNode(div);
});
