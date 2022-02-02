import React from "react";
import Button from "./Button";

const BottomCta = () => {
  return (
    <section className="bottom-cta py-5">
      <div className="container py-5">
        <div className="wrapper">
          <div className="header">
            <h2 className="text-dark">Ready to get started?</h2>
            <p>Receive news, announcements and reports</p>
          </div>
          <div className="buttons d-flex w-50">
            <Button version="secondary" text="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCta;
