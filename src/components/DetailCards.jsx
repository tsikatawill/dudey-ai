import React from "react";
import DetailCard from "./DetailCard";
import { FaBeer } from "react-icons/fa";

const DetailCards = () => {
  return (
    <section className="detail-cards py-5">
      <div className="container py-5">
        <DetailCard>
          <InnerCardContent
            image={<FaBeer size="30" />}
            title="Own Machine Learning"
            text="Melior has already developed its own Machine Learning, Neural
            Network and Deep Learning models"
            extraStuff={<p className="text--primary">Learn more</p>}
          />
        </DetailCard>
        <DetailCard>
          <InnerCardContent
            image={<FaBeer size="30" />}
            title="Own Machine Learning"
            text="Melior has already developed its own Machine Learning, Neural
            Network and Deep Learning models"
            extraStuff={<p className="text--primary">Learn more</p>}
          />
        </DetailCard>
        <DetailCard>
          <InnerCardContent
            image={<FaBeer size="30" />}
            title="Own Machine Learning"
            text="Melior has already developed its own Machine Learning, Neural
            Network and Deep Learning models"
            extraStuff={<p className="text--primary">Learn more</p>}
          />
        </DetailCard>
      </div>
    </section>
  );
};

export const InnerCardContent = ({ image, title, text, extraStuff }) => {
  return (
    <>
      <div className="icon-bg">{image}</div>
      <p className="lead fw-bold">{title}</p>
      <p>{text}</p>
      {extraStuff && extraStuff}
    </>
  );
};

export default DetailCards;
