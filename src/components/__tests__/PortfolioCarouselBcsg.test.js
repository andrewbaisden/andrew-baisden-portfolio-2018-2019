import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselBcsg from '../PortfolioCarouselBcsg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselBcsg />, div);
  ReactDOM.unmountComponentAtNode(div);
});
