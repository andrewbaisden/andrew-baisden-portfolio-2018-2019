import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselOcado from '../PortfolioCarouselOcado';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselOcado />, div);
  ReactDOM.unmountComponentAtNode(div);
});
