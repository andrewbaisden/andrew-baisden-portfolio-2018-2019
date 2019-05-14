import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioMediaReach from '../PortfolioMediaReach';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioMediaReach />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
