import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import DeveloperPod from '../components/DeveloperPod';
import DesignerPod from '../components/DesignerPod';
import VideoBG from '../components/VideoBG';
import CheckHomePage from '../components/CheckHomePage';

const Home = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="Andrew Baisden, Full Stack Developer from London. Skilled in the art of both programming and design."
        />
        <title>Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com" />
      </Helmet>
    </div>
    <CheckHomePage />
    <Header />
    <Hero />
    <DeveloperPod />
    <VideoBG />
    <DesignerPod />
    <Footer />
  </div>
);

export default Home;
