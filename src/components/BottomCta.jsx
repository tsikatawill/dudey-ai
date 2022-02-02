import React from "react";
import Button from "./Button";

const BottomCta = () => {
  return (
    <section className="bottom-cta py-5">
      <div className="container py-5">
        <div className="wrapper">
          <div className="header">
            <h2 className="text-dark m-0">Ready to get started?</h2>
            <p className="m-0">Receive news, announcements and reports</p>
          </div>
          <div className="buttons mt-3 d-flex justify-content-between align-items-center mx-auto">
            <Button version="secondary" text="GET WHITELISTED" />
            <div className="space mx-2"></div>
            <Button version="primary" text="BUY COINS NOW" extraClasses="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCta;
