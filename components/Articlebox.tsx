type box = {
  icon: string;
  heading: string;
  paragraph: string;
};
const Articlebox = ({ icon, heading, paragraph }: box) => {
  const output = (
    <div className="articlebox">
      <i className={icon}></i>
      <h4>{heading}</h4>
      <div>{paragraph}</div>
    </div>
  );

  return output;
};

export default Articlebox;
