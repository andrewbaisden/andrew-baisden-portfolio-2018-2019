import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselAprilSix from '../PortfolioCarouselAprilSix';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselAprilSix />, div);
  ReactDOM.unmountComponentAtNode(div);
});
