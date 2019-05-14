import React from 'react';

class CheckHomePage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('Home_SVG').classList.add('default-state');
      document.getElementById('home_h1').classList.add('default-state');
    }, 100);
  }
  render() {
    return null;
  }
}

export default CheckHomePage;
