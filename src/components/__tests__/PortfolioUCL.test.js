import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioUCL from '../PortfolioUCL';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioUCL />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
