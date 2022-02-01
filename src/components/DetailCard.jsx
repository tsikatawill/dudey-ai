import React from "react";

const DetailCard = ({ version, width, children, extraClasses }) => {
  const style = {
    width,
  };
  return (
    <div
      className={`detail-card card--${version} ${extraClasses}`}
      style={style}
    >
      {children}
    </div>
  );
};

DetailCard.defaultProps = {
  version: "plain",
  width: "fit-content",
};
export default DetailCard;
