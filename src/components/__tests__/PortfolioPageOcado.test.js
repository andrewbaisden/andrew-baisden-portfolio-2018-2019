import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageOcado from '../PortfolioPageOcado';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageOcado />, div);
  ReactDOM.unmountComponentAtNode(div);
});
