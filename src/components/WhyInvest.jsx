import React from "react";
import IconBg from "./IconBg";
import { FaBeer } from "react-icons/fa";
import Button from "./Button";

const WhyInvest = () => {
  return (
    <section className="why-invest bg--pale-primary" id="why-invest">
      <div className="container d-lg-flex text-center text-md-start py-5">
        <div className="left mb-5 mb-lg-0">
          <h2 className="text--primary">Why Invest?</h2>
          <p className="my-4">
            Our Main Mission: To provide affordable groundbreaking AI products
            that give businesses of all sizes a way to take advantage of the AI
            revolution.
          </p>
          <Button version="primary" text="BUY COINS NOW" />
        </div>
        <div className="right reason-cards w-100">
          <ReasonCard
            title="Melior marketplace"
            text="They will have the option to either buy tokens on the market
            or pay dudey in flat so we can take care of the conversation behind
            the scenes. Melior will undertake to do all flat to token transaction."
          />
          <ReasonCard
            title="Melior marketplace"
            text="They will have the option to either buy tokens on the market
            or pay dudey in flat so we can take care of the conversation behind
            the scenes. Melior will undertake to do all flat to token transaction."
          />
          <ReasonCard
            title="Melior marketplace"
            text="They will have the option to either buy tokens on the market
            or pay dudey in flat so we can take care of the conversation behind
            the scenes. Melior will undertake to do all flat to  token transaction."
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
