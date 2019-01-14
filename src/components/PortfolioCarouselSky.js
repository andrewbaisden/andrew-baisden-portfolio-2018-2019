import React from 'react';
import Flickity from 'react-flickity-component/src/index';
import skyArt from '../img/skyArt.jpg';
import skyBreakingBad from '../img/skyBreakingBad.jpg';
import skyCinema from '../img/skyCinema.jpg';
import skyCycling from '../img/skyCycling.jpg';
import skyIronMan from '../img/skyIronMan.jpg';
import skyNemo from '../img/skyNemo.jpg';
import skyWhiteWalker from '../img/skyWhiteWalker.jpg';

const flickityOptions = {
  initialIndex: 2,
  pageDots: false,
  wrapAround: true,
  autoPlay: 7000,
  draggable: false,
  prevNextButtons: false,
  pauseAutoPlayOnHover: false,
  selectedAttraction: 0.01,
  friction: 0.4,
  lazyLoad: true,
};

const PortfolioCarouselSky = () => (
  <div className="carousel-page-container">
    <div className="carousel-container">
      <Flickity
        className="carousel" // default ''
        elementType="div" // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >
        <div className="carousel-cell-sky">
          <div className="carousel-slide-sky">
            <div className="carousel-slide-image-sky">
              <img src={skyArt} alt="Team Sky Artwork" />
            </div>
          </div>
        </div>
        <div className="carousel-cell-sky">
          <div className="carousel-slide-sky">
            <div className="carousel-slide-image-sky">
              <img src={skyBreakingBad} alt="Sky Breaking Bad Booth" />
            </div>
          </div>
        </div>
        <div className="carousel-cell-sky">
          <div className="carousel-slide-sky">
            <div className="carousel-slide-image-sky">
              <img src={skyCinema} alt="Sky Cinema Batman Booth" />
            </div>
          </div>
        </div>
        <div className="carousel-cell-sky">
          <div className="carousel-slide-sky">
            <div className="carousel-slide-image-sky">
              <img src={skyCycling} alt="Team Sky Cycling Press Conference" />
            </div>
          </div>
        </div>
        <div className="carousel-cell-sky">
          <div className="carousel-slide-sky">
            <div className="carousel-slide-image-sky">
              <img src={skyIronMan} alt="Sky Iron Man Welcome Desk" />
            </div>
          </div>
        </div>
        <div className="carousel-cell-sky">
          <div className="carousel-slide-sky">
            <div className="carousel-slide-image-sky">
              <img src={skyNemo} alt="Sky Nemo Drone" />
            </div>
          </div>
        </div>
        <div className="carousel-cell-sky">
          <div className="carousel-slide-sky">
            <div className="carousel-slide-image-sky">
              <img src={skyWhiteWalker} alt="White Walkers invade Sky Central" />
            </div>
          </div>
        </div>
      </Flickity>
    </div>
  </div>
);

export default PortfolioCarouselSky;
