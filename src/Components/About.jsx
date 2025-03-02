import React from 'react';
import '../Style/About.css';
import Img from '../assets/Avis.jpg';

function About() {
  return (
    <>
      <section className="about-me-section" id="about">
        <div className="about-me-container">
          <div className="about-me-text">
            <h2 className="about-me-title text-light pb-5 " data-aos="fade-up" data-aos-duration="500">About Me</h2>
            <p className="about-me-paragraph">
              I started exploring web development in 2022 and, over two years, gained experties in major front-end and back-end technologies like HTML, CSS, JavaScript, Bootstrap, jQuery, React, Java and MySQL. My passion for building web applications helped me grow consistently.

              I find the process of building dynamic and user-friendly web applications incredibly rewarding. Whether it's designing responsive user interfaces or crafting robust back-end systems, One aspect that sets me apart is my expertise in full stack development. I have hands-on experience in both front-end and back-end technologies.
            </p>
            <p className='about-me-paragraph'>
              If you're interested in collaborating on a project or discussing anything related to web development, feel free to reach out! Let's connect and turn ideas into reality.
            </p>
          </div>
          <div className="about-me-animation" data-aos="fade-up" data-aos-duration="500">
            <figure>
              <img src={Img} className='img-fluid' alt='Image' />
              <figcaption style={{fontFamily: 'Brush Script MT,cursive',fontSize: '2rem'}}>Avinash Shinde</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
