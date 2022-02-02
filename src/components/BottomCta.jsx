import React from "react";
import Button from "./Button";
import DetailCard from "./DetailCard";

const BottomCta = () => {
  return (
    <section className="bottom-cta py-5">
      <div className="container py-5">
        <DetailCard>
          <div className="header">
            <h2 className="text-dark">Ready to get started?</h2>
            <p>Receive news, announcements and reports</p>
          </div>
          <div
            className="buttons debug d-flex justify-content-between align-items-center mx-auto"
            style={{ maxWidth: "100%" }}
          >
            <Button version="secondary" text="GET WHITELISTED" />
            <Button version="primary" text="BUY COINS NOW" />
          </div>
        </DetailCard>
      </div>
    </section>
  );
};

export default BottomCta;
