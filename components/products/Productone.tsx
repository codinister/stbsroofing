import Link from 'next/link';
import Image from 'next/image';

type Det = {
  img: string;
  details: React.ReactNode;
};

const Productone = ({ img, details }: Det) => {
  return (
    <section className="productone">
      <div className="container">
        <div className="col-5">
          <div className="prodimg"></div>
        </div>
        <div className="col-2">
          <div className="prodBx">
            <h4>Advantages</h4>
            <div>{details}</div>

            <Link href="/contact">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .prodimg {
            background-image: url('/${img}');
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </section>
  );
};

export default Productone;
