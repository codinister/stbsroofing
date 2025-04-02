'use client'


import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Description from '@/components/products/Description';
import Freeestimate from '@/components/products/Freeestimate';
import Productone from '@/components/products/Productone';

const Trusses = () => {
  function details() {
    return (
      <ol className="pl-0 ml-1">
        <li>Durable</li>
        <li>Light Weight</li>
        <li>Flexibility In Design</li>
      </ol>
    );
  }

  const images = [
    { url: '/trusses1.jpg' },
    { url: '/trusses2.jpg' },
    { url: '/trusses3.jpg' },
  ];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Trusses"
          subheading="Our IBR Sheets are unique"
        />
      </div>

      <Productone details={details()} img="trusses4.jpg" />

      <Freeestimate />

      <section className="sectionunique">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="Yaks Roofing Steel Trusses is a hot dipped galvanized structural grade steel developed specifically to maximize the efficiency of of cold formed construction projects.
        Yaks Roofing Steel Trusses provides the highest yield strength to maximize the total steel requirement in each of your engineered structures."
        />
      </section>
    </>
  );
};

export default Trusses;
