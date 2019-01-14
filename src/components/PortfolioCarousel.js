import React from 'react';
import Flickity from 'react-flickity-component/src/index';
import portfolio2014Home from '../img/portfolio2014Home.jpg';
import portfolio2014About from '../img/portfolio2014About.jpg';
import portfolio2014Portfolio from '../img/portfolio2014Portfolio.jpg';
import portfolio2014Contact from '../img/portfolio2014Contact.jpg';

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
        <img src={portfolio2014Home} alt="Home" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={portfolio2014About} alt="About" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={portfolio2014Portfolio} alt="Portfolio" />
      </div>
      <div className="carousel-cell-portfolio">
        <img src={portfolio2014Contact} alt="Contact" />
      </div>
    </Flickity>
  </div>
);

export default PortfolioCarousel;
