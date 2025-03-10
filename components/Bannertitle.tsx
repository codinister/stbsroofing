type Headings = {
  subheading: string;
  mainheading: string;
};

const Bannertitle = ({ subheading, mainheading }: Headings) => {
  return (
    <div className="bannertitle">
      <div>
        <h4>{subheading}</h4>
        <h1>{mainheading}</h1>
      </div>
    </div>
  );
};

export default Bannertitle;
