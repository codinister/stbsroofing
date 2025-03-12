
'use client'

import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Description from '@/components/products/Description';
import Freeestimate from '@/components/products/Freeestimate';
import Productone from '@/components/products/Productone';

const Shingles = () => {
  function details() {
    return (
      <ol className="pl-0 ml-1">
        <li>Versatility</li>
        <li>Design Variety</li>
        <li>Cost-Effective Quality</li>
        <li>Color Options</li>
      </ol>
    );
  }

  const images = [
    { url: '/shingles2.jpg' },
    { url: '/shingles3.jpg' },
    { url: '/shingles4.jpg' },
  ];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Shingles"
          subheading="Our IBR Sheets are unique"
        />
      </div>
      <Productone details={details()} img="shingles1.jpg" />

      <Freeestimate />

      <section className="sectionunique">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="For those wondering, “What is a shingle roof?” here’s the straightforward answer: it’s a roofing installation covered with shingles. Shingles are flat, rectangular pieces of asphalt, composite, or other roofing material; they’re applied from the base of the roof upwards and often overlap to provide full coverage."
        />
      </section>
    </>
  );
};

export default Shingles;
