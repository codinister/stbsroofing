'use client'

import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import Description from '@/components/products/Description';
import Freeestimate from '@/components/products/Freeestimate';
import Productone from '@/components/products/Productone';

function details() {
  return (
    <ol className="pl-0 ml-1">
      <li>Quiet and Eliminates Water Buildup</li>
      <li>Long Lasting</li>
      <li>Tough Yet Lightweight</li>
      <li>Can Cope with Adverse Weather Conditions</li>
    </ol>
  );
}

const Ibrsheets = () => {
  const images = [
    { url: '/ibr2.jpg' },
    { url: '/ibr3.jpg' },
    { url: '/ibr4.jpg' },
  ];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="IBR Sheets"
          subheading="Our IBR Sheets are unique"
        />
      </div>
      <Productone img="ibr1.jpg" details={details()} />

      <Freeestimate />

      <section className="sectionone">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="We supply IBR Roof Sheeting for large construction projects. Talk to any of our sales consultants about pricing options on IBR Sheeting.
        IBR roof sheeting is a square fluted profile with an effective covering width of 686 mm, designed for use as side cladding or roofing material in commercial, industrial and residential buildings. The name IBR is abbreviated from “Inverted Box Rib”. The deep, broad flute design offers excellent drainage characteristics combined with optimum weight versus load/span capabilities. IBR can be factory cranked, curved and bullnosed to various radii depending on customer’s requirements. We have it in guages of (0.4 – 5.0)."
        />
      </section>
    </>
  );
};

export default Ibrsheets;
