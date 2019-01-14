import React from 'react';

const ContactForm = () => (
  <div className="contact-form-container">
    <div className="contact-form-copy">
      <p>
        The best developers remain active, and up to date with new industry trends. I am one of those people who likes
        to stay in the loop, so you can feel confident that you are going to be getting a very good product, and
        service. This is my passion and, my hobby so you can rest assured that I am not, going to one of those people
        who treats you like just another customer. I prefer individual tailoring.
      </p>

      <p>
        If you are interested in hiring, networking or you have a question go right ahead and connect. I am always open
        to new challenges, and possibilities. I am active in the development community, and I am more than open to
        discussing anything related to this field. Be it for work, learning or fun!
      </p>
    </div>
    <div className="contact-form">
      <iframe
        height="480"
        frameBorder="0"
        scrolling="no"
        style={{ width: '100%', border: 'none' }}
        src="https://andrewbaisden.wufoo.co.uk/embed/z1t40zb208z7ir5/"
        title="formContact"
      >
        <a href="https://andrewbaisden.wufoo.com/forms/z1t40zb208z7ir5/">Fill out my Wufoo form!</a>
      </iframe>
      <div
        id="wuf-adv"
        style={{
          font: 'inherit',
          color: '#a7a7a7',
          text: 'center',
          display: 'block',
        }}
      />
    </div>
  </div>
);

export default ContactForm;
