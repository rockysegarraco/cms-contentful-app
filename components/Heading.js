//Heading.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const Heading = ({ children, light, dark, two }) => {
  const classes = classNames("font-bold", {
    "text-white text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[4.5rem] mb-4 lg:mb-8":
      light,
    "text-info-950 text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[4.5rem] mb-4 lg:mb-8":
      dark,
    "text-info-950 text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-4xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem] mb-4 lg:mb-8":
      two,
  });

  return <h1 className={classes}>{children}</h1>;
};

export default Heading;
