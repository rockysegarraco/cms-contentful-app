//Paragraph.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const Paragraph = ({ children, light, dark }) => {
  const classes = classNames("leading-7", {
    "text-white": light,
    "text-dark-950": dark,
  });

  return <p className={classes}>{children}</p>;
};

export default Paragraph;
