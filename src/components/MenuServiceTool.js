import React from 'react';
import PropTypes from 'prop-types';

const MenuServices = props => (
  <div className="services-menu">
    <ul>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#macbook" alt="Macbook Pro Retina">
          Macbook Pro Retina
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#photoshop" alt="Graphic Editing Tool">
          Graphic Editing Tool
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#ui" alt="UI/UX Design Tools">
          UI/UX Design Tools
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#code" alt="Code Editor">
          Code Editor
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#terminal" alt="Terminal">
          Terminal App
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#browsers" alt="Web Browsers">
          Web Browsers
        </a>
      </li>
    </ul>
  </div>
);

MenuServices.propTypes = {
  menuBG: PropTypes.string,
};

MenuServices.defaultProps = {
  menuBG: '#F30A2D',
};

export default MenuServices;
