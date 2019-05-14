import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarousel from '../PortfolioCarousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
