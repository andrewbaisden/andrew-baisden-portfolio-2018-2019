import React from 'react';
import PropTypes from 'prop-types';

const MenuServices = props => (
  <div className="services-menu">
    <ul>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#concept" alt="Concept">
          Concept
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#prototype" alt="Prototyping">
          Prototyping
        </a>
      </li>
      <li style={{ background: `${props.menuBG}` }}>
        <a href="#appDesign" alt="Website and Application Design">
          Website and Application Design
        </a>
      </li>
    </ul>
  </div>
);

MenuServices.propTypes = {
  menuBG: PropTypes.string.isRequired,
};

export default MenuServices;
