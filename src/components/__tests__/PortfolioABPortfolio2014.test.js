import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioABPortfolio2014 from '../PortfolioABPortfolio2014';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioABPortfolio2014 />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
