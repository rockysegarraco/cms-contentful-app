//Container.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const Container = ({ children, twocolumn, onecolumn }) => {
  const classes = classNames("mx-auto grid max-w-7xl px-8 py-16 lg:py-24", {
    "grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16": twocolumn,
    "grid-cols-1 lg:grid-cols-1 text-center gap-0 lg:gap-0": onecolumn,
  });

  return <div className={classes}>{children}</div>;
};

export default Container;
