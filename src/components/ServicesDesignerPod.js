import React from 'react';
import PropTypes from 'prop-types';

const ServicesDesignerPod = props => (
  <div>
    <div className="developer-pod-container">
      <div className="developer-services-copy">
        <h1 id="concept" style={{ background: `${props.h1bg}` }}>
          Concept
        </h1>
        <p>
          This is where it all begins. The very first step of the design process. It starts with the very basic concept,
          all the way up to the final design.
        </p>
        <h2>Design Production Build Phases</h2>
        <p>
          Phase 1: Design <br />
          Phase 2: Prototype <br />
          Phase 3: Final Design
        </p>
        <h1 id="prototype" style={{ background: `${props.h1bg}` }}>
          Prototyping
        </h1>
        <p>
          Prototyping, which is also known as wireframing, is an essential step for any design process. It is how you
          view the hierarchical layout, be it for a website or application. The design is consequently, easy to
          interpret and build. This means that it is one of the best ways, to communicate the interactive methodologies,
          which is a crucial step when creating the development process. You will see that it allows you to view the
          whole user experience.
        </p>

        <p>
          I would use one of my preferred design tools for the project. Like Sketch and InVision Studio for example.
          Then I would design it, and prototype it so that it can be viewed in web browsers, and mobile devices
          natively. Then I would export the assets and get them ready for the development phase, which is where the
          programming comes into place.
        </p>
        <h1 id="appDesign" style={{ background: `${props.h1bg}` }}>
          Website and Application Design
        </h1>
        <p>
          I can design new websites, and even redesign existing ones, with a brand new design if need be. The first step
          is brainstorming and coming up with a concept, followed by the prototyping and final design, which I will
          build using a design tool.
        </p>
      </div>
    </div>
  </div>
);

ServicesDesignerPod.propTypes = {
  h1bg: PropTypes.string.isRequired,
};

export default ServicesDesignerPod;
