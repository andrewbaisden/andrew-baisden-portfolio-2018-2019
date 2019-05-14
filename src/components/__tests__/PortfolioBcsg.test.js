import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioBcsg from '../PortfolioBcsg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioBcsg />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
