import React from "react";

const Button = ({ version, text, extraClasses }) => {
  return (
    <button className={`btn btn--${version} ${extraClasses && extraClasses}`}>
      {text}
    </button>
  );
};

export default Button;
