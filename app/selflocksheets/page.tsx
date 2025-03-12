'use client'

import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Description from '@/components/products/Description';
import Freeestimate from '@/components/products/Freeestimate';
import Productone from '@/components/products/Productone';

const Selflocksheets = () => {
  function details() {
    return (
      <ol className="pl-0 ml-1">
        <li>It is aesthetically appealing</li>
        <li>It boosts the structures curb appeal</li>
        <li>It is affordable</li>
      </ol>
    );
  }

  const images = [
    { url: '/selflock2.jpg' },
    { url: '/selflock3.jpg' },
    { url: '/selflock4.jpg' },
  ];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Selflock Sheets"
          subheading="Our IBR Sheets are unique"
        />
      </div>
      <Productone img="selflock1.jpg" details={details()} />

      <Freeestimate />

      <section className="sectionunique">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="Let us roof your house with self lock which is an interlocking profile, self fix clipping system which requires no nails to secure the Roofing sheets; hence no holes will be created in the sheet. The sheets lie firmly clipping each others.With our experience roof contractors, we roof your dream home giving it quality finish"
        />
      </section>
    </>
  );
};

export default Selflocksheets;
