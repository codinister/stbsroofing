'use client'


import Sectiontitle from '@/components/Sectiontitle';
import Bannertitle from '@/components/Bannertitle';
import Contactdetails from '@/components/Contactdetails';
import Requestquote from '@/components/Requestquote';
import Banner from '@/components/Banner';

import { GrPhone } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiGps } from "react-icons/ci";



const Contact = () => {
  const contactnumbers = `
  (+233) 0597 902 549
  `;
  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/about.jpg" />

        <Bannertitle mainheading="Contact" subheading="Get In Touch" />
      </div>
      <section className="sectiontwo">
        <div className="container">
          <div className="col-5">
            <Sectiontitle
              mainheading="Contact Details"
              subheading="Get In Touch"
            />

            <div className="contact-flex">
              <Contactdetails
                icons="fa fa-phone"
                heading="Contact Numbers​"
                details={contactnumbers}
              />

              <Contactdetails
                icons="fa fa-envelope"
                heading="Email"
                details="smarttotalstbs@gmail.com"
              />
            </div>

            <div className="contact-flex">
              <Contactdetails
                icons="fa fa-map-marker"
                heading="Accra"
                details="Achimota - Post Office Near Achimota Market"
              />
            </div>

            <div className="contact-flex">
              <Contactdetails
                icons="fa fa-whatsapp"
                heading="Whatsapp"
                details="+233 598775968"
              />
              <Contactdetails
                icons="fa fa-map-marker"
                heading="GPS Code:"
                details="GE-229-7967"
              />
            </div>
          </div>

          <div className="col-3">
            <div className="mob-mt"></div>
            <Requestquote />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
