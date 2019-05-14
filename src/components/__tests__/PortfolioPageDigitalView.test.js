import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageDigitalView from '../PortfolioPageDigitalView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageDigitalView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
