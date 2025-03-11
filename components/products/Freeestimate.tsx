import Link from 'next/link';

const Freeestimate = () => {
  return (
    <>
      <div
        className="freeestimate"
        style={{
          backgroundImage: "url('/freeestimate.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: '-2',
        }}
      >


        <div>
          <h4>Free Estimation</h4>
          <h2>Request A Quote</h2>
          <div>
            Want us to work on a project for you? West Coast is just a click
            away from you. Request a free estimate for your building.
          </div>
        
            <Link href="/contact">Get A Quote</Link>
          </div>
        
      </div>
    </>
  );
};

export default Freeestimate;
