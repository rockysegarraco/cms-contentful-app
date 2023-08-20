//Wrapper.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const Wrapper = ({
  children,
  primary,
  secondary,
  light,
  slate,
  bkg,
  secondarylight,
}) => {
  const classes = classNames("relative isolate overflow-hidden", {
    "bg-gradient-to-r from-info-950 to-dark-accent": primary,
    "bg-gradient-to-r from-secondary-950 to-secondary-dark-accent": secondary,
    "bg-white": light,
    "bg-slate-50": slate,
    "bg-secondary-100": secondarylight,
    "bg-[url('/img/bgk-swirl.png')] bg-gradient-to-r from-secondary-950 to-secondary-dark-accent":
      bkg,
  });

  return <div className={classes}>{children}</div>;
};

export default Wrapper;
