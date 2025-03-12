'use client';

import Sectiontitle from '@/components/Sectiontitle';
import Bannertitle from '@/components/Bannertitle';
import Image from 'next/image';
import Banner from '@/components/Banner';

const About = () => {
  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/about.jpg" />
        <Bannertitle mainheading="About Us" subheading="A Few Words" />
      </div>

      <section className="about-wrapper">
        <div>
          <div
            style={{
              backgroundImage: 'url("/abt.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div>
            <h1>About Smart Roofing Systems</h1>
          Smart Roofing Systems Limited is a registered company that has now
          surfaced in the roofing industry with six years of experience
          personnel with the industry background. We are very much committed to
          providing the quality roofing sheets that will light the beauty of
          your roofing at an affordable price. We also believe in team work and
          as such, discussions are done with the client concerning certain
          technicalities such as the strength of the building, the nature of the
          wood-work, the location of the building as well as the weather
          conditions in area. All these are done by our team of experts for the
          client free of charge to ensure that the client’s expectations are
          met.   
          </div>
        </div>


        <div>
          <div>
          <h1>Our Vision</h1>
          The vision of Smart Roofing Systems is to become a one stop shop
          for all types of durable roofing sheets and accessories.
          </div>
          <div>
            <h1>Our Materials</h1>
          As Smart Roofing materials are sourced from credible overseas
            suppliers which have gone through the necessary chemical and
            structural tests to ascertain its suitability in the Ghanaian
            environment. 
          </div>
          <div>
          <h1>Our Mission</h1>
          The mission of Smart Roofing Systems is to provide good customer
              service, quality roofing materials with the state-of-the-art
              accessories to individuals, corporate entities as well as other
              agencies at an affordable price to all.
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
