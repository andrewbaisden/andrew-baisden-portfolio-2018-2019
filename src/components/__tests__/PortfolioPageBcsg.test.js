import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageBcsg from '../PortfolioPageBcsg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageBcsg />, div);
  ReactDOM.unmountComponentAtNode(div);
});
