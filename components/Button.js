//Button.jsx
import classNames from "classnames"; // "classNames"!! NOT "className"

const Button = ({ children, primary }) => {
  const classes = classNames(
    "rounded-full px-8 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    {
      "bg-primary-950": primary,
    }
  );

  return (
    <div className="flex pt-8">
      <button className={classes}>{children}</button>
    </div>
  );
};

export default Button;
