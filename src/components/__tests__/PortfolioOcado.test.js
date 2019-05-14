import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioOcado from '../PortfolioOcado';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioOcado />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
