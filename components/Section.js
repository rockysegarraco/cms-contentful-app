export default Section = ({ className }) => {
  return (
    <div
      className={
        "relative isolate overflow-hidden bg-white text-dark-950 ${className}"
      }
    >
      <h2>I'm the child component</h2>
    </div>
  );
};
