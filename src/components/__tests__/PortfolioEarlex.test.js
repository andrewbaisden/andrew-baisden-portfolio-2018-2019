import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioEarlex from '../PortfolioEarlex';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioEarlex />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
