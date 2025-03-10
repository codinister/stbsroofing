'use client'

import type { NextPage } from 'next';
import Slider from '@madzadev/image-slider';
import '@madzadev/image-slider/dist/index.css';
import Sectiontitle from '@/components/Sectiontitle';
import Articlebox from '@/components/Articlebox';
import Quote from '@/components/Quote';
import Requestquote from '@/components/Requestquote';
import Image from 'next/image';
import Headertitle from '@/components/Headertitle';

const Home: NextPage = () => {
  const wid = `100vw`;
  const hegt = `100vh`;

  const images = [
    { url: '/slider1.jpg' },
    { url: '/slider2.jpg' },
    { url: '/slider3.jpg' },
  ];

  return (
    <>
      <div className="slideshow">
        <Slider
          imageList={images}
          width={wid}
          height={hegt}
          loop={true}
          autoPlay={true}
          autoPlayInterval={7000}
          showArrowControls={false}
          showDotControls={false}
        />
        <Headertitle />
      </div>

      <section className="sectionone">
        <div className="container">
          <Sectiontitle
            mainheading="Accurate Record Keeping"
            subheading="Why Choose Us"
          />
        </div>

        <div className="container mob-container">
          <div>
            <Articlebox
              icon="fa fa-clock-o"
              heading="Always on time"
              paragraph="We are always on time no matter the location of your site"
            />
          </div>
          <div>
            <Articlebox
              icon="fa fa-check"
              heading="Hard Working"
              paragraph="We always put in our very best to make sure you are satisfied."
            />
          </div>
          <div>
            <Articlebox
              icon="fa fa-calendar"
              heading="24/7 Availability"
              paragraph="We have a state of the art customer service that is always and readily available to help"
            />
          </div>
        </div>
      </section>






      <section className="sectiontwo">
        <div className="container">
          <Sectiontitle
            mainheading="What Our Clients Say?"
            subheading="Testimonials"
          />
        </div>

        <div className="container mob-container">
          <div>
            <Quote
              text="What I really like about Smart Roofing Systems is I didn’t have to be present before estimates would be carried out and guess what I paid nothing. It was all done for free. They have excellent customer service and support. I am very glad I contacted them."
              name="Mrs. Theresa Tetteh"
            />
          </div>
          <div>
            <Quote
              text="I was sceptical when I was introduced to Smart Roofing Systems especially when I had to contact them electronically. I got the shock of my life. They replied swiftly in just a matter of minutes. I received my quotation. They are what they say they are."
              name="Mr. Ofori Atta"
            />
          </div>
          <div>
            <Quote
              text="What I really like about Smart Roofing Systems is I didn’t have to be present before estimates would be carried out and guess what I paid nothing. It was all done for free. They have excellent customer service and support. I am very glad I contacted them."
              name="Dr. Douglas Sarpong"
            />
          </div>
        </div>
      </section>

      <section className="sectionthree">
        <div className="container">
      
     
        </div>
      </section>
    </>
  );
};

export default Home;
