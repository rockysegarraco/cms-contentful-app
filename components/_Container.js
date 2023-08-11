//Container.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const _Container = ({ children, twocolumn, onecolumn, twocolumnmargin }) => {
  const classes = classNames("mx-auto grid max-w-7xl px-8 py-12 lg:py-24", {
    "grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16": twocolumn,
    "grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:pb-0 lg:pt-24":
      twocolumnmargin,
    "grid-cols-1 lg:grid-cols-1 text-center gap-0 lg:gap-0": onecolumn,
  });

  return <div className={classes}>{children}</div>;
};

export default _Container;
