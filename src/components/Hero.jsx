import React from "react";
import HeroImg from "../assets/heroPhone.svg";
import Button from "./Button";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container py-5 d-flex align-items-center">
        <div className="text w-100 text-center text-md-start">
          <h1>Meet our AI Chatbot Solution</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            pariatur, ducimus blanditiis in vero, eos voluptate accusamus
            consectetur.
          </p>
          <Countdown />
          <div
            className="bottom d-flex align-items-center justify-content-between"
            style={{ maxWidth: "400px" }}
          >
            <Button version="secondary" text="JOIN WHITELIST" />
            <span className="division" style={{ fontSize: "2rem" }}>
              |
            </span>
            <div className="demo-data">
              <span className="lead fw-bold">1330 participants</span>
              <span className="d-block">in whitelist</span>
            </div>
          </div>
        </div>
        <div className="image d-none d-md-block w-100">
          <img src={HeroImg} alt="hero" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
