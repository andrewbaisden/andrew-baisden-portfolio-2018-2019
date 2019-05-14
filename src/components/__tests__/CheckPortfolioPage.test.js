import React from 'react';
import ReactDOM from 'react-dom';
import CheckPortfolioPage from '../CheckPortfolioPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckPortfolioPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
