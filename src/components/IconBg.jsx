import React from "react";

const IconBg = ({ color, children, format }) => {
  return <div className={`icon-bg bg--${color}`}>{children}</div>;
};

export default IconBg;
