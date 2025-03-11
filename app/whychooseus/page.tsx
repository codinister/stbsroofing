'use client'

import Sectiontitle from '@/components/Sectiontitle';
import Articlebox from '@/components/Articlebox';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';
import { FaRegClock } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BsCash } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";

const Whychooseus = () => {
  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Why Choose Us"
          subheading="Accurate Measurement And Record Keeping"
        />
      </div>

      <section className="sectionone">
        <div className="container">
          <Sectiontitle
            mainheading="We Should Work Together"
            subheading="This Is Why"
          />
        </div>
        


        <div className="container mob-container">
          <div>
            <Articlebox
              icon={<FaRegClock />}
              heading="Always on time"
              paragraph="We are always on time no matter the location of your site"
            />
          </div>
          <div>
            <Articlebox
              icon={<FaCheckCircle />}
              heading="Hard Working"
              paragraph="We always put in our very best to make sure you are satisfied."
            />
          </div>
          <div>
            <Articlebox
              icon={<FaRegCalendarAlt />}
              heading="24/7 Availability"
              paragraph="We have a state of the art customer service that is always and readily available to help"
            />
          </div>
        </div>

        <br />


   

        <div className="container mob-container">
          <div>
            <Articlebox
              icon={<BsCash />}
              heading="Maximum Profitability"
              paragraph="We serve you with the most quality of products in the markets yet affordable hence making you save some money."
            />
          </div>
          <div>
     

            <Articlebox
              icon={<FaQuestionCircle />}
              heading="Classified Transactions"
              paragraph="All documentations of all transactions are kept secured in our database where unauthorized people can't access."
            />
          </div>
          <div>
   

            <Articlebox
              icon={<FaCircleNotch />}
              heading="Always Accurate"
              paragraph="Our expert estimators always take accurate measurement to avoid shorstages or overages of materials."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Whychooseus;
