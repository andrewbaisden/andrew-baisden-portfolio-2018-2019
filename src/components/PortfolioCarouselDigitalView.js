import React from 'react';
import Flickity from 'react-flickity-component/src/index';
import bcsgQAScreen1 from '../img/bcsgQAScreen1.jpg';
import bcsgQAScreen2 from '../img/bcsgQAScreen2.jpg';
import bcsgQAScreen3 from '../img/bcsgQAScreen3.jpg';
import bcsgQAScreen4 from '../img/bcsgQAScreen4.jpg';
import bcsgQAScreen5 from '../img/bcsgQAScreen5.jpg';

export const flickityOptions = {
  initialIndex: 2,
  pageDots: false,
  wrapAround: true,
  autoPlay: true,
  draggable: true,
  imagesLoaded: true,
  prevNextButtons: true,
  pauseAutoPlayOnHover: true,
  lazyLoad: true,
};

const PortfolioCarousel = () => (
  <div className="carousel-container">
    <Flickity
      className="carousel-portfolio" // default ''
      elementType="div" // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
    >
      <div className="carousel-cell-portfolio">
        <img src={bcsgQAScreen1} alt="Quote App Screen 1" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={bcsgQAScreen2} alt="Quote App Screen 2" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={bcsgQAScreen3} alt="Quote App Screen 3" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={bcsgQAScreen4} alt="Quote App Screen 4" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={bcsgQAScreen5} alt="Quote App Screen 5" />
      </div>
    </Flickity>
  </div>
);

export default PortfolioCarousel;
