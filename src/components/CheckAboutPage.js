import React from 'react';

class CheckAboutPage extends React.Component {
  componentDidMount() {
    // document.getElementById('About_SVG').style.fill = 'var(--base-colour-yellow)';
    // document.getElementById('about_h1').style.color = 'var(--base-colour-yellow)';
    document.getElementById('About_SVG').classList.add('default-state');
    document.getElementById('about_h1').classList.add('default-state');
  }
  render() {
    return null;
  }
}

export default CheckAboutPage;
