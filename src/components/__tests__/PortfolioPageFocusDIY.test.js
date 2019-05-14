import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageFocusDIY from '../PortfolioPageFocusDIY';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageFocusDIY />, div);
  ReactDOM.unmountComponentAtNode(div);
});
