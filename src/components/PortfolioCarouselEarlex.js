import React from 'react';
import Flickity from 'react-flickity-component/src/index';
import earlexFlyer1Front from '../img/earlexFlyer1Front.jpg';
import earlexFlyer1Back from '../img/earlexFlyer1Back.jpg';
import earlexFlyer2Front from '../img/earlexFlyer2Front.jpg';
import earlexFlyer2Back from '../img/earlexFlyer2Back.jpg';
import earlexFlyer3Front from '../img/earlexFlyer3Front.jpg';
import earlexFlyer3Back from '../img/earlexFlyer3Back.jpg';

const flickityOptions = {
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
        <img src={earlexFlyer1Front} alt="Earlex Flyer 1 Front" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={earlexFlyer1Back} alt="Earlex Flyer 1 Back" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={earlexFlyer2Front} alt="Earlex Flyer 2 Front" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={earlexFlyer2Back} alt="Earlex Flyer 2 Back" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={earlexFlyer3Front} alt="Earlex Flyer 3 Front" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={earlexFlyer3Back} alt="Earlex Flyer 3 Back" />
      </div>
    </Flickity>
  </div>
);

export default PortfolioCarousel;
