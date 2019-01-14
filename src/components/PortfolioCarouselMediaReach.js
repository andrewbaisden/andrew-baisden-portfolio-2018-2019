import React from 'react';
import Flickity from 'react-flickity-component/src/index';
import latymerCourt1 from '../img/latymerCourt1.jpg';
import latymerCourt2 from '../img/latymerCourt2.jpg';
import latymerCourt3 from '../img/latymerCourt3.jpg';
import latymerCourt4 from '../img/latymerCourt4.jpg';
import latymerCourt5 from '../img/latymerCourt5.jpg';

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
        <img src={latymerCourt1} alt="Latymer Court Homepage" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={latymerCourt2} alt="Latymer Court About Page" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={latymerCourt3} alt="Latymer Court Services Page" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={latymerCourt4} alt="Latymer Court Important Documents Page" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={latymerCourt5} alt="Latymer Court Contact Us Page" />
      </div>
    </Flickity>
  </div>
);

export default PortfolioCarousel;
