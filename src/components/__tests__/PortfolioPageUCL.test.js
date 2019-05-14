import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageUCL from '../PortfolioPageUCL';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageUCL />, div);
  ReactDOM.unmountComponentAtNode(div);
});
