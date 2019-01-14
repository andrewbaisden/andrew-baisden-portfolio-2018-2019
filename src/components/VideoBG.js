import React from 'react';
import VideoHome1 from '../video/videoHome1.mp4';
import VideoHome2 from '../video/videoHome2.webm';
import VideoHome3 from '../video/videoHome3.mov';

const VideoBG = () => (
  <div className="video-container">
    <h1>
      “If you can dream it, you can do it.” <br /> - Walt Disney
    </h1>
    <div className="video-overlay" />
    <video playsInline autoPlay muted loop className="video-background">
      <source src={VideoHome1} type="video/mp4" />
      <source src={VideoHome2} type="video/webm" />
      <source src={VideoHome3} type="video/mov" />
      Your browser does not support the video tag. I recommend that you upgrade your browser, or try a more modern
      browser.
    </video>
  </div>
);

export default VideoBG;
