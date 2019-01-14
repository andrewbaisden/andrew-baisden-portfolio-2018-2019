import React from 'react';

class CheckPortfolioPage extends React.Component {
  componentDidMount() {
    // document.getElementById('Portfolio_SVG').style.fill = 'var(--base-colour-yellow)';
    // document.getElementById('portfolio_h1').style.color = 'var(--base-colour-yellow)';
    document.getElementById('Portfolio_SVG').classList.add('default-state');
    document.getElementById('portfolio_h1').classList.add('default-state');
  }
  render() {
    return null;
  }
}

export default CheckPortfolioPage;
