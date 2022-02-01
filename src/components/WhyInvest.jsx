import React from "react";
import IconBg from "./IconBg";
import { FaBeer } from "react-icons/fa";
import Button from "./Button";

const WhyInvest = () => {
  return (
    <section className="why-invest bg--pale-primary">
      <div className="container d-md-flex text-center text-md-start py-5">
        <div className="left mb-5 mb-md-0" style={{ maxWidth: "400px" }}>
          <h2 className="text--primary">Why Invest?</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            quasi, itaque, atque reiciendis sed odit commodi et quis eveniet aut
            vero, assumenda molestias. Tempora officia esse perspiciatis
            reprehenderit adipisci. Sit!
          </p>
          <Button version="primary" text="BUY COINS NOW" />
        </div>
        <div className="right reason-cards w-100">
          <ReasonCard
            title="Melior marketplace"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel obcaecati impedit molestias tenetur magni consectetur quae ut officia, ex hic, ipsa aliquam voluptatem dolorum porro, illum animi nulla ducimus!"
          />
          <ReasonCard
            title="Melior marketplace"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel obcaecati impedit molestias tenetur magni consectetur quae ut officia, ex hic, ipsa aliquam voluptatem dolorum porro, illum animi nulla ducimus!"
          />
          <ReasonCard
            title="Melior marketplace"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel obcaecati impedit molestias tenetur magni consectetur quae ut officia, ex hic, ipsa aliquam voluptatem dolorum porro, illum animi nulla ducimus!"
          />
        </div>
      </div>
    </section>
  );
};

export const ReasonCard = ({ image, title, text }) => {
  return (
    <div className="reason-card d-sm-flex text-start mx-5 mb-4">
      <div className="image-wrapper mb-2 mb-sm-0">
        <IconBg color="light" format='display: "none"'>
          {image ? (
            <img src={image} alt="some" />
          ) : (
            <FaBeer size="40" color="#12098a" />
          )}
        </IconBg>
      </div>

      <div className="text">
        <h3 className="text--primary">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WhyInvest;
