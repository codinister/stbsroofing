type Quote = {
  text: string;
  name: string;
};

const Quote = ({ text, name }: Quote) => {
  return (
    <div className="quote">
      <div>
        <i className="fa fa-quote-left"></i>
        <article>{text}</article>
        <strong>{name}</strong>
      </div>
    </div>
  );
};

export default Quote;
