import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselPowWow from '../PortfolioCarouselPowWow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselPowWow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
