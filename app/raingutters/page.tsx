'use client'

import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Description from '@/components/products/Description';
import Freeestimate from '@/components/products/Freeestimate';
import Productone from '@/components/products/Productone';

const Raingutters = () => {
  function details() {
    return (
      <ol className="pl-0 ml-1">
        <li>Stabilized soil surrounding your home</li>
        <li>Fewer cases of erosion</li>
        <li>Leakages are rare</li>
        <li>Less water damage to your home’s siding</li>
        <li>Preserved exterior and garage doors</li>
      </ol>
    );
  }

  const images = [
    { url: '/raingutter2.jpg' },
    { url: '/raingutter3.jpg' },
    { url: '/raingutter4.jpg' },
  ];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Rain Gutters"
          subheading="Our IBR Sheets are unique"
        />
      </div>
      <Productone details={details()} img="raingutter1.jpg" />

      <Freeestimate />

      <section className="sectionunique">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="A rain gutter, eavestrough, eaves-shoot or surface water collection channel is a component of a water discharge system for a building.[1] It is necessary to prevent water dripping or flowing off roofs in an uncontrolled manner for several reasons: to prevent it damaging the walls, drenching persons standing below or entering the building, and to direct the water to a suitable disposal site where it will not damage the foundations of the building. In the case of a flat roof, removal of water is essential to prevent water ingress and to prevent a build-up of excessive weight."
        />
      </section>
    </>
  );
};

export default Raingutters;
