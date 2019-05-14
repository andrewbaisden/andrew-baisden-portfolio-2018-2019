import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioSky from '../PortfolioSky';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioSky />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
