import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageMediaReach from '../PortfolioPageMediaReach';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageMediaReach />, div);
  ReactDOM.unmountComponentAtNode(div);
});
