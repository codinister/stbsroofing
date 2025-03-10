const Banner = ({ img }: { img: string }) => {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </>
  );
};

export default Banner;
