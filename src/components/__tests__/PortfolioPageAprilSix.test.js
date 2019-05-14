import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageAprilSix from '../PortfolioPageAprilSix';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageAprilSix />, div);
  ReactDOM.unmountComponentAtNode(div);
});
