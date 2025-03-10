type Title = {
  question: string;
  answer: string;
};

const Faqs = ({ question, answer }: Title) => {
  return (
    <div className="faq">
      <h3>{question}</h3>
      <div>{answer}</div>
    </div>
  );
};

export default Faqs;
