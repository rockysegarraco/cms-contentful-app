//Wrapper.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const Wrapper = ({ children, primary, secondary, light, slate }) => {
  const classes = classNames("relative isolate overflow-hidden", {
    "bg-gradient-to-r from-info-950 to-dark-accent": primary,
    "bg-gradient-to-r from-secondary-950 to-secondary-dark-accent": secondary,
    "bg-white": light,
    "bg-slate-50": slate,
  });

  return <div className={classes}>{children}</div>;
};

export default Wrapper;
