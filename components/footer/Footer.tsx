import Link from 'next/link';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
  return (
    <>
      <section className="footer-wrapper">
        <div className="container">
          <div className="about-box">
            <h4>About Smart Roofing</h4>
            <p>
              We are one of the leading roofing sheet companies with the
              objective of providing a well-researched modern and aesthetic
              roofing for Ghanaians. All ergonomical considerations are made
              before our roofing sheets are manufactured.
            </p>

            <Link href="/about">Learn More</Link>
          </div>

          <div>
            <h4>Products</h4>

            <ul>
              <li>
                <Link href="/ibrsheets">IBR Sheets</Link>
              </li>
              <li>
                <Link href="/selflocksheets">Selflock Sheets</Link>
              </li>
              <li>
                <Link href="/standingseams">Standing Seams</Link>
              </li>
              <li>
                <Link href="/eurotiles">Euro Tiles</Link>
              </li>
              <li>
                <Link href="/shingles">Shingles</Link>
              </li>
              <li>
                <Link href="/steptiles">Step Tiles</Link>
              </li>
              <li>
                <Link href="/raingutters">Rain Gutters</Link>
              </li>
              <li>
                <Link href="/valleys">Valleys</Link>
              </li>
              <li>
                <Link href="/sidetrims">Side Trims</Link>
              </li>
              <li>
                <Link href="/trusses">Trusses</Link>
              </li>
              <li>
                <Link href="/eavetrims">Eave Trims</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Important Links</h4>

            <ul>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/whychooseus">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/contact">Request for Quote</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Let’s Connect!</h4>
            <p>
              Connect with us and interact with our elite team. Together, we
              roof your building with style and give it a definitive touch.
            </p>

            <div className="flex gap-2">
              <a href="https://web.facebook.com/sroofing22">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/smartroofingghana/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/smart-roofing-systems-66a61b241/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <ScrollToTop smooth className="scrolltotop" />

        <a
          className="whatsappbtn"
          href="http://wa.me/233548123221?text=Hello%2C%20I%20want%20to%20make%20inquiries%20about%20your%20roofing%20sheets"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </section>
      <footer>
        <div>
          Copyright © 2022 www.sroofingsystems.com | All rights reserved.
        </div>

        <div>Developed by Emagweb Solutions</div>
      </footer>
    </>
  );
};

export default Footer;
