import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const path = usePathname();
  const [scroll, setScrol] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleEvent);

    return () => window.removeEventListener('scroll', handleEvent);
  }, []);

  const handleEvent = () => {
    const scroll = Math.floor(window.scrollY);
    if (scroll > 100) {
      setScrol(true);
    } else {
      setScrol(false);
    }
  };

  const prods = [
    '/ibrsheets',
    '/selflocksheets',
    '/standingseams',
    '/eurotiles',
    '/shingles',
    '/steptiles',
    '/raingutters',
    '/valleys',

    '/trusses',
  ];

  return (
    <nav className={`navbar ${scroll ? 'show' : 'hide'} `}>
      <div className={`container ${show ? 'show' : 'hide'}`}>
        <div>
          <Link onClick={() => setShow(false)} href="/">
            <Image width="200" height="90" src="/logo.jpg" alt="" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link
                onClick={() => setShow(false)}
                className={path === '/' ? 'active' : ''}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow(false)}
                className={path === '/whychooseus' ? 'active' : ''}
                href="/whychooseus"
              >
                Why choose Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow(false)}
                className={path === '/testimonials' ? 'active' : ''}
                href="/testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link className={prods.includes(path) ? 'active' : ''} href="#">
                Products
              </Link>
              <ul onClick={() => setShow(false)}>
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
                  <Link href="/trusses">Trusses</Link>
                </li>
              </ul>
            </li>
            <li className="about">
              <Link
                onClick={() => setShow(false)}
                className={path === '/about' ? 'active' : ''}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow(false)}
                className={path === '/contact' ? 'active' : ''}
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShow(false)}
                className={path === '/faq' ? 'active' : ''}
                href="/faq"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        onClick={() => setShow(false)}
        className={`nav-backdrop ${show ? 'show' : 'hide'} `}
      ></div>

      <div className="hamburger">
        <Image
          src="/hamburger-icon.png"
          alt="hamburger"
          width="40"
          height="40"
          onClick={() => setShow(true)}
        />
      </div>
    </nav>
  );
};

export default Nav;
