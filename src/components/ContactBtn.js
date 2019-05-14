import React from 'react';
import PropTypes from 'prop-types';

const ContactBtn = props => (
  <div>
    <svg
      version="1.1"
      id="Contact_SVG"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 455 455"
      xmlSpace="preserve"
      fill="#ffffff"
      role="img"
      aria-label={props.contactAlt}
    >
      <title>{props.contactAlt}</title>
      <desc>{props.contactAlt}</desc>
      <polygon points="455,13.935 0,13.935 0,338.935 70,338.935 70,441.065 172.129,338.935 455,338.935 " />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  </div>
);

ContactBtn.propTypes = {
  contactAlt: PropTypes.string,
};

ContactBtn.defaultProps = {
  contactAlt: 'Contact',
};

export default ContactBtn;
