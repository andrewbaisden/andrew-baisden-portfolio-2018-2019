import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioFocusDIY from '../PortfolioFocusDIY';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioFocusDIY />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
