
'use client'


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

      <section className="sectiontwo">
        <Sectiontitle mainheading="Aesthetic Roofing" subheading="Who we are" />

        <div className="container">
          <div className="col-4 bg-white">
            <div className="para-text">
              WELCOME TO Smart Roofing Systems We are one of the leading roofing
              sheet companies with the objective of providing a well-researched
              modern and aesthetic roofing for Ghanaians. All ergonomical
              considerations are made before our roofing sheets are
              manufactured. Contact Us on 0548123221 or 0206603011
            </div>
          </div>
          <div className="col-1">
            <div className="imgbx">
              <Image
                src="/abt.jpeg"
                alt=""
                width="3"
                height="2"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sectionone">
        <Sectiontitle
          mainheading="Want to know more about us?"
          subheading="Our Mission"
        />

        <div className="container">
          <div className="para-text">
            As Smart Roofing materials are sourced from credible overseas
            suppliers which have gone through the necessary chemical and
            structural tests to ascertain its suitability in the Ghanaian
            environment. 
          </div>
        </div>

        <div className="container">
          <div>
            <h4>Vision</h4>
            <div className="para-text">
              The vision of Smart Roofing Systems is to become a one stop shop
              for all types of durable roofing sheets and accessories.
            </div>
          </div>
          <div>
            <h4>Mission</h4>
            <div className="para-text">
               The mission of Smart Roofing Systems is to provide good customer
              service, quality roofing materials with the state-of-the-art
              accessories to individuals, corporate entities as well as other
              agencies at an affordable price to all.
            </div>
          </div>
        </div>
      </section>

      <section className="sectiontwo">
        <Sectiontitle mainheading="Why choose us?" subheading="We are unique" />

        <div className="para-text">
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
      </section>
    </>
  );
};

export default About;
