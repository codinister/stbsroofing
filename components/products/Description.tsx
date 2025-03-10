import Slider from '@madzadev/image-slider';
import Link from 'next/link';

type Desc = {
  title: string;
  img: {};
  text: string;
};

const Description = ({ title, text, img }: Desc) => {
  const wid = `100%`;
  const hegt = `30rem`;

  return (
    <div className="description">
      <div>
        <h4>{title}</h4>
        <div>{text}</div>
        <Link href="/contact">
          Get Quote
        </Link>
      </div>

      <div>
        <Slider
          imageList={img}
          width={wid}
          height={hegt}
          loop={false}
          autoPlay={false}
          autoPlayInterval={7000}
          showArrowControls={true}
          showDotControls={false}
        />
      </div>
    </div>
  );
};

export default Description;
