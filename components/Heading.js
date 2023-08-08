//Heading.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const Heading = ({ children, light, dark }) => {
  const classes = classNames(
    "text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem] mb-4 lg:mb-8 font-bold",
    {
      "text-white": light,
      "text-info-950": dark,
    }
  );

  return <h1 className={classes}>{children}</h1>;
};

export default Heading;
