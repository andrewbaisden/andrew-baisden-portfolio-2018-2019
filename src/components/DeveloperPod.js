import React from 'react';
import developerIcon from '../img/developIcon.svg';
import htmlIcon from '../img/htmlIcon.svg';
import cssIcon from '../img/cssIcon.svg';
import jsIcon from '../img/jsIcon.svg';

const DeveloperPod = () => (
  <div className="developer-pod-container">
    <div className="developer-pod-heading">
      <img src={developerIcon} alt="Developer" />
      <h1>Developer</h1>
      <p>The Master Builder</p>
    </div>
    <div className="developer-pod-content">
      <div className="developer-image">
        <img src={htmlIcon} alt="HTML" />
        <img src={cssIcon} alt="CSS" />
        <img src={jsIcon} alt="Javascript" />
      </div>
      <p>
        Like everything in life, my passion for programming came from an experience. Gaming to be exact. I was always so
        amazed at the incredible things that you could do, there is no better feeling than bringing something to life.
      </p>

      <p>
        Over the years I have constantly being evolving my skills, and I have now settled on a very modern developer
        workflow. It consists of using the Javascript frameworks React and Vue. They are very powerful tools and I like
        how they can be used to build all types of applications. For both the web, and mobile devices.
      </p>

      <p>
        My preference when it comes to structuring websites is to use CSS3. I find that the combined power of CSS Grid
        and Flexbox, is proving to be nearly unlimited. So traditional CSS frameworks, are no longer a given choice in
        my opinion. However, I am more than capable of using CSS frameworks like Twitter Bootstrap, Materialize and
        Bulma should the need arise.
      </p>
    </div>
  </div>
);

export default DeveloperPod;
