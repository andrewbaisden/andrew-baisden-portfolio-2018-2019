import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselUCL from '../PortfolioCarouselUCL';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselUCL />, div);
  ReactDOM.unmountComponentAtNode(div);
});
