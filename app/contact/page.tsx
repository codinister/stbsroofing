'use client';

import Sectiontitle from '@/components/Sectiontitle';
import Bannertitle from '@/components/Bannertitle';
import Contactdetails from '@/components/Contactdetails';
import Requestquote from '@/components/Requestquote';
import Banner from '@/components/Banner';
import { GrPhone } from 'react-icons/gr';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import Map from '@/components/Map';

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
                icons={<GrPhone />}
                heading="Contact Numbers​"
                details={contactnumbers}
              />

              <Contactdetails
                icons={<FaRegEnvelope />}
                heading="Email"
                details="info@yaksroofingsystem.com"
              />
            </div>

            <div className="contact-flex">
              <Contactdetails
                icons={<FaMapMarkerAlt />}
                heading="Akyem Nsutam"
                details="Near Paradise Resort"
              />

              <Contactdetails
                icons={<BsWhatsapp />}
                heading="Whatsapp"
                details="+233 55 738 4893"
              />

       
            </div>

            <div className="map-bx">
            <Map 
                src="Akyem Nsutam"
                width="100%"
                height="250"
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
