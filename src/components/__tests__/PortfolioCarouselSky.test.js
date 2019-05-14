import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCarouselSky from '../PortfolioCarouselSky';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioCarouselSky />, div);
  ReactDOM.unmountComponentAtNode(div);
});
