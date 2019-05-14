import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPagePowWow from '../PortfolioPagePowWow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPagePowWow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
