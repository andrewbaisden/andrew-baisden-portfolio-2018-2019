import React from 'react';

class CheckHomePage extends React.Component {
  componentDidMount() {
    // document.getElementById('Home_SVG').style.fill = 'var(--base-colour-yellow)';
    // document.getElementById('home_h1').style.color = 'var(--base-colour-yellow)';
    document.getElementById('Home_SVG').classList.add('default-state');
    document.getElementById('home_h1').classList.add('default-state');
  }
  render() {
    return null;
  }
}

export default CheckHomePage;
