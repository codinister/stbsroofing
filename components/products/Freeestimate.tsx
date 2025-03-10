import Link from 'next/link';

const Freeestimate = () => {
  return (
    <>
      <div className="freeestimate">
        <div className="container">
          <div className="col-5">
            <div>
              <h4>Free Estimation</h4>
              <h2>Request A Quote</h2>
              <div className="para">
                Want us to work on a project for you? West Coast is just a click
                away from you. Request a free estimate for your building.
              </div>
            </div>
          </div>

          <div className="col-2">
            <Link href="/contact">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .freeestimate {
            background-image: url('/freeestimate.jpg');
            background-size: cover;
            background-position: center;
            z-index: -2;
          }
        `}
      </style>
    </>
  );
};

export default Freeestimate;
