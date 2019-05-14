import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PortfolioPowWow from '../PortfolioPowWow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PortfolioPowWow />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
