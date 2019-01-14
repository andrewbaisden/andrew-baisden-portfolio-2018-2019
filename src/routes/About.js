import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import AboutPod from '../components/AboutPod';
import CheckAboutPage from '../components/CheckAboutPage';
import ServicesBreadcrumb from '../components/ServicesBreadcrumb';

const Home = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="I’m Andrew thanks for checking out my website! My career choice was to be a Developer. I have always had a passion for programming. For those of you who are not technical on this subject, it basically means that I’m a wizard! Well, maybe not a real wizard but the things I can do, really can be perceived as magic!"
        />
        <title>About - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/about" />
      </Helmet>
    </div>
    <CheckAboutPage />
    <Header />
    <ProfileImage />
    <ServicesBreadcrumb />
    <AboutPod />
    <Footer />
  </div>
);

export default Home;
