import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioAprilSix from '../PortfolioAprilSix';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioAprilSix />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
