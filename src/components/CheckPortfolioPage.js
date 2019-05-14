import React from 'react';

class CheckPortfolioPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('Portfolio_SVG').classList.add('default-state');
      document.getElementById('portfolio_h1').classList.add('default-state');
    }, 100);
  }
  render() {
    return null;
  }
}

export default CheckPortfolioPage;
