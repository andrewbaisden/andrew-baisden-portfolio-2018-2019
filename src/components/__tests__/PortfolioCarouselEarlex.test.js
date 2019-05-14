import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselEarlex from '../PortfolioCarouselEarlex';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselEarlex />, div);
  ReactDOM.unmountComponentAtNode(div);
});
