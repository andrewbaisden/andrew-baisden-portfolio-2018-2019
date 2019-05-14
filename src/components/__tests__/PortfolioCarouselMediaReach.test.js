import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselMediaReach from '../PortfolioCarouselMediaReach';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselMediaReach />, div);
  ReactDOM.unmountComponentAtNode(div);
});
