'use client'

import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Description from '@/components/products/Description';
import Freeestimate from '@/components/products/Freeestimate';
import Productone from '@/components/products/Productone';

const Valleys = () => {
  function details() {
    return (
      <ol className="pl-0 ml-1">
        <li>It is more aesthetically pleasing</li>
        <li>Quicker to install</li>
        <li>Usually cheaper</li>
      </ol>
    );
  }

  const images = [
    { url: '/valley1.jpg' },
    { url: '/valley2.jpg' },
    { url: '/valley3.jpg' },
  ];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Valleys"
          subheading="Our IBR Sheets are unique"
        />
      </div>

      <Productone details={details()} img="valley4.jpg" />

      <Freeestimate />

      <section className="sectionone">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="A roof valley is formed where two roof slopes meet. Water collects in a valley to flow off the roof. Your choice of valley installation method is critical because, when improperly installed, valleys are risks for serious leaks."
        />
      </section>
    </>
  );
};

export default Valleys;
