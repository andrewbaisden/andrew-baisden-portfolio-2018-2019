import React from 'react';
import PortfolioCarouselHome from '../components/PortfolioCarouselHome';

const Hero = () => (
  <div className="hero-container">
    <PortfolioCarouselHome
      slide1BG="var(--base-colour-red)"
      slide2BG="var(--base-colour-green)"
      slide3BG="var(--base-colour-yellow)"
      slide4BG="var(--base-colour-orange)"
      slide5BG="var(--base-colour-grey)"
    />
  </div>
);

export default Hero;
