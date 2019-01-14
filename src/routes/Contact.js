import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import CheckContactPage from '../components/CheckContactPage';

const Contact = () => (
  <div>
    <div>
      <Helmet>
        <meta
          name="description"
          itemProp="description"
          content="If you are interested in hiring, networking or you have a question go right ahead and connect. I am always open to new challenges and possibilities."
        />
        <title>Contact - Full Stack Developer | Andrew Baisden | London</title>
        <link rel="canonical" href="https://andrewbaisden.com/contact" />
      </Helmet>
    </div>
    <CheckContactPage />
    <Header />
    <ContactForm />
    <Footer />
  </div>
);

export default Contact;
