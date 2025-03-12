'use client'

import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Description from '@/components/products/Description';
import Freeestimate from '@/components/products/Freeestimate';
import Productone from '@/components/products/Productone';

const Steptiles = () => {
  function details() {
    return (
      <ol className="pl-0 ml-1">
        <li>
          Steptiles Aluminium roofing sheet easily cover large area of roof
        </li>
        <li>They are easier to maintain</li>
        <li>Leakages are rare</li>
        <li>
          Steptiles longspan aluminium can be done by most roofers in town
        </li>
      </ol>
    );
  }

  const images = [
    { url: '/steptiles2.jpg' },
    { url: '/steptiles3.jpg' },
    { url: '/steptiles4.jpg' },
  ];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Step Tiles"
          subheading="Our IBR Sheets are unique"
        />
      </div>

      <Productone details={details()} img="steptiles1.jpg" />

      <Freeestimate />

      <section className="sectionunique">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="Steptile Aluminium roof sheets are incredibly popular amongst roofers and contractors, and there are several good reasons why you should choose aluminium for your next project. Not only is it a versatile material that will be well-suited and structurally sound on a range of agricultural and outbuildings, it’s easy to work with too so it can be used for DIY roofing projects. Garden studios, workshops and even home offices can benefit from being topped with metal roof sheets instead of other traditional roofing materials as they can be less expensive overall and easier to install for a beginner DIYer."
        />
      </section>
    </>
  );
};

export default Steptiles;
