'use client'

import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Description from '@/components/products/Description';
import Freeestimate from '@/components/products/Freeestimate';
import Productone from '@/components/products/Productone';

const Ibrsheets = () => {
  function details() {
    return (
      <ol className="pl-0 ml-1">
        <li>It is cost-effective.</li>
        <li>It has heat and sound insulation.</li>
        <li>It comes in a variety of colours and shapes</li>
      </ol>
    );
  }

  const images = [{ url: '/eurotiles2.jpg' }, { url: '/eurotiles3.jpg' }];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Euro Tiles"
          subheading="Our IBR Sheets are unique"
        />
      </div>
      <Productone details={details()} img="eurotiles1.jpg" />

      <Freeestimate />

      <section className="sectionunique">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="Euro Tiles in roofing sheets are often categorised not just by their material, but the way they are built and integrated together. For example, some people are looking for Spanish roofing styles, while others want flat roof tile styles or roman roof tile styles. In some geographies, a particular type of euro tiles in roofing sheets may be commonly used. Smart Roofing understands the market landscape and personal preferences of different consumers
"
        />
      </section>
    </>
  );
};

export default Ibrsheets;
