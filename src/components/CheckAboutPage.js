import React from 'react';

class CheckAboutPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('About_SVG').classList.add('default-state');
      document.getElementById('about_h1').classList.add('default-state');
    }, 100);
  }
  render() {
    return null;
  }
}

export default CheckAboutPage;
