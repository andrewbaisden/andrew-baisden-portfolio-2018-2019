import React from 'react';

class CheckContactPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('Contact_SVG').classList.add('default-state');
      document.getElementById('contact_h1').classList.add('default-state');
    }, 100);
  }
  render() {
    return null;
  }
}

export default CheckContactPage;
