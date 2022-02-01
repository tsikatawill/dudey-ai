import React from "react";
import Button from "./Button";
import DetailCard from "./DetailCard";

const Newsletter = () => {
  const [email, setEmail] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && email.length > 5) {
      if (window.confirm(`Sure ${email} is your email?`)) {
        setShowAlert(true);
        setEmail("");
      } else {
        setShowAlert(true);
      }
    }
  };
  return (
    <section className="newsletter">
      <div className={`disappearing-thingy ${showAlert && "active"}`}>
        <DetailCard className="card p-4 bg-white text-dark">
          <h3>You have subscribed to our newsletter!</h3>
          <p>We will send you the latest news, announcements and reports</p>
          <button
            className="btn btn--primary"
            onClick={() => setShowAlert(false)}
          >
            Okay
          </button>
        </DetailCard>
        <div className="bg"></div>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <h2>Get the latest from Dudey</h2>
            <p>Receive news, announcements and reports</p>
          </div>

          <form
            className="mt-4"
            style={{ maxWidth: "600px", width: "100%" }}
            onSubmit={handleSubmit}
          >
            <div className="form-group d-flex">
              <input
                type="email"
                required
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                style={{ width: "80%", marginRight: "30px" }}
              />
              <Button version="secondary" text="SUBSCRIBE" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
