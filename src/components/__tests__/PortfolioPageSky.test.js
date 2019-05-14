import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageSky from '../PortfolioPageSky';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageSky />, div);
  ReactDOM.unmountComponentAtNode(div);
});
