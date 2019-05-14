import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselFocusDiy from '../PortfolioCarouselFocusDiy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselFocusDiy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
