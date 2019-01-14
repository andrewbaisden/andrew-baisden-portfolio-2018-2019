import React from 'react';
import designerIcon from '../img/designerIcon.svg';
import amimeCharacter from '../img/animeCharacter.png';

const DesignerPod = () => (
  <div className="developer-pod-container">
    <div className="developer-pod-heading">
      <img src={designerIcon} alt="Developer" />
      <h1>Designer</h1>
      <p>The Creative Genius</p>
    </div>
    <div className="developer-pod-content">
      <div className="designer-image">
        <img src={amimeCharacter} alt="Anime" />
      </div>
      <p>
        Designing has always been a passion of mine, ever since I first started to learn Adobe Photoshop all of those
        years ago. You know what as good as programming is, I still believe that the most creative people, can grasp
        ideas from both sides of the tree. My creativity comes from everything around me. That is how I get my
        inspiration. I am a huge fan of Japanese anime, my favourite show being the Dragonball series. The amazing
        drawing styles and animations in anime’s, have always captivated my imagination.
      </p>

      <p>
        I do like to draw from time to time. I am self taught, and like a lot of my skills, I have been honing and
        improving them non stop throughout the years. I like being versatile and this ability to design my own
        creatives, makes me unique as not all Developers have an eye for design!
      </p>

      <p>This website is of my own creation. No themes, no templates just my own imagination.</p>
    </div>
  </div>
);

export default DesignerPod;
