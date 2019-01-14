import React from 'react';

class CheckContactPage extends React.Component {
  componentDidMount() {
    // document.getElementById('Contact_SVG').style.fill = 'var(--base-colour-yellow)';
    // document.getElementById('contact_h1').style.color = 'var(--base-colour-yellow)';
    document.getElementById('Contact_SVG').classList.add('default-state');
    document.getElementById('contact_h1').classList.add('default-state');
  }
  render() {
    return null;
  }
}

export default CheckContactPage;
