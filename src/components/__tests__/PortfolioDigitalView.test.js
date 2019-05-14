import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioDigitalView from '../PortfolioDigitalView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioDigitalView />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
