//Button.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const Button = ({ children }) => {
  const classes = classNames(
    "rounded-full bg-primary-950 px-8 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  );

  return <button className={classes}>{children}</button>;
};

export default Button;
