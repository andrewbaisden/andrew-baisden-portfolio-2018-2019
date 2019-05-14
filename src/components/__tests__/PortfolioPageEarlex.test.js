import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageEarlex from '../PortfolioPageEarlex';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageEarlex />, div);
  ReactDOM.unmountComponentAtNode(div);
});
