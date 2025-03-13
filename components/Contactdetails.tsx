type Headings = {
  icons: React.ReactNode;
  heading: string;
  details: string;
};

const Contactdetails = ({ icons, heading, details }: Headings) => {
  return (
    <div className="contactdetails">
      {icons}
      <div>
        <h4>{heading}</h4>
        <div>{details}</div>
      </div>
    </div>
  );
};

export default Contactdetails;
