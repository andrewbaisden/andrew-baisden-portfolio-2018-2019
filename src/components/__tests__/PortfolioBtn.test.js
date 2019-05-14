import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioBtn from '../PortfolioBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
