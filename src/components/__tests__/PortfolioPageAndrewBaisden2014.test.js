import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPageAndrewBaisden2014 from '../PortfolioPageAndrewBaisden2014';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPageAndrewBaisden2014 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
