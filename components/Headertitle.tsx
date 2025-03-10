import Link from 'next/link';

const Headertitle = () => {
  return (
    <div className="headeer-title">

      <div>
      <h1>Hire The Experts To</h1>
      <h1>Roof Your Building</h1>

      <div className="divider"></div>

      <p>
        Invest your time and efforts on constructing your building. Leave the
        roofing to us.
      </p>

      <Link href="/contact">
        Get A Quote
      </Link>
      </div>
    </div>
  );
};

export default Headertitle;
