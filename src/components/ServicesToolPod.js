import React from 'react';
import PropTypes from 'prop-types';

const ServicesToolPod = props => (
  <div>
    <div className="developer-pod-container">
      <div className="developer-services-copy">
        <h1 id="macbook" style={{ background: `${props.h1bg}` }}>
          Macbook Pro Retina
        </h1>
        <p>
          I am primarily a macOS developer, this is the computer system that I work with daily. Although I specialise in
          working on macs, I am familiar with Windows computers too.
        </p>
        <h1 id="photoshop" style={{ background: `${props.h1bg}` }}>
          Graphic Editing Tool
        </h1>
        <p>
          Adobe Photoshop was the first graphical editing program, that I learned to use many years ago. I first started
          using it in college, and it has become my go to tool for doing any sort of graphic design work.
        </p>
        <h1 id="ui" style={{ background: `${props.h1bg}` }}>
          UI/UX Design Tools
        </h1>
        <p>
          I use tools like, Sketch, Adobe XD, InVision Studio and Figma for designing web, and mobile applications. They
          are vector based programs, which means that they retain their pixel quality, and do not degrade like raster
          based applications. This makes them perfect, tools when creating user interfaces (UI), and user experience
          designs (UX). This is the workflow for designing, and prototyping applications.
        </p>
        <h1 id="code" style={{ background: `${props.h1bg}` }}>
          Code Editor
        </h1>
        <p>
          Over the years I have used various code editors for programming. I started off in Notepad and Notepad++, and I
          even used Dreamweaver back in the day. Atom, Sublime Text 3, and Brackets were other code editors I enjoyed
          using. These days, my preference is Visual Studio Code, and by a long way. The large community of developers
          plus, the large library of packages and extensions, is why it has become my code editor of choice. I use it
          every time, I’m programming.
        </p>
        <h1 id="terminal" style={{ background: `${props.h1bg}` }}>
          Terminal App
        </h1>
        <p>
          Hyper, is the name of the terminal command line tool, I use for interacting with the computer and managing my
          workflow. I prefer this tool to using the default terminal application which comes with macOS because, it has
          significantly more customisations. This means I can be a much better developer and, get work done faster. I
          also use it with a bash framework called Oh My Zsh. It adds even more functionality, as well as
          personalisation so my workflow feels like it was designed for me. Using the command line, is how I interact
          with NodeJS, npm, Webpack and GIT.
        </p>
        <h1 id="browsers" style={{ background: `${props.h1bg}` }}>
          Web Browsers
        </h1>
        <p>
          Firefox, Chrome and Safari, are the browsers I use for testing natively. The included browser developer tools
          is how I debug errors, and test different features. For cross browser testing, I use tools such as
          BrowserStack. This gives me native access, to multiple desktop and mobile browsers, on all computer systems.
        </p>
      </div>
    </div>
  </div>
);

ServicesToolPod.propTypes = {
  h1bg: PropTypes.string,
};

ServicesToolPod.defaultProps = {
  h1bg: '#ffffff',
};

export default ServicesToolPod;
