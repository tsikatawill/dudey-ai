import React from "react";
import DetailCard from "./DetailCard";
import { InnerCardContent } from "./DetailCards";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const CommunicationChannels = () => {
  return (
    <section className="communication-channels">
      <div className="container">
        <div className="header">
          <h2>Melior Official Communication Channels</h2>
          <p>
            We are happy to answer any of your question - below are Melior’s
            official communication channels
          </p>
        </div>
        <div className="channel-cards pt-5">
          <DetailCard version="outlined">
            <InnerCardContent
              image={<span className="h3 text-white">M</span>}
              title="Medium Account is:"
              extraStuff={
                <a className="text--primary" href="www.medium.com">
                  medium.com/dudey-ai
                </a>
              }
            />
          </DetailCard>
          <DetailCard version="outlined">
            <InnerCardContent
              image={<FaFacebook size={30} color="white" />}
              title="Facebook Account is:"
              extraStuff={
                <a className="text--primary" href="www.facebook.com">
                  facebook.com/dudey-ai
                </a>
              }
            />
          </DetailCard>
          <DetailCard version="outlined">
            <InnerCardContent
              image={<FaTwitter size={30} color="white" />}
              title="Twitter Account is:"
              extraStuff={
                <a className="text--primary" href="www.twitter.com">
                  twitter.com/dudey-ai/dudey-ai
                </a>
              }
            />
          </DetailCard>
        </div>
      </div>
    </section>
  );
};

export default CommunicationChannels;
