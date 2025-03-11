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
        <div>
          <div
            className="prodimg"
            style={{
              backgroundImage: `url('/${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div>
          <div className="prodBx">
            <h4>Advantages</h4>
            <div>{details}</div>
            <Link href="/contact">Get Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productone;
