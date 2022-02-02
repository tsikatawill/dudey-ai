import React from "react";
import DetailCard from "./DetailCard";
import { InnerCardContent } from "./DetailCards";

const CommunicationChannels = () => {
  return (
    <section className="communication-channels py-5">
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
                <a href="www.github.com/tsikatawill">medium.com/dudey-ai</a>
              }
            />
          </DetailCard>
          <DetailCard version="outlined">
            <InnerCardContent
              image={<span className="h3 text-white">M</span>}
              title="Medium Account is:"
              extraStuff={
                <a href="www.github.com/tsikatawill">medium.com/dudey-ai</a>
              }
            />
          </DetailCard>
          <DetailCard version="outlined">
            <InnerCardContent
              image={<span className="h3 text-white">M</span>}
              title="Medium Account is:"
              extraStuff={
                <a href="www.github.com/tsikatawill">medium.com/dudey-ai</a>
              }
            />
          </DetailCard>
        </div>
      </div>
    </section>
  );
};

export default CommunicationChannels;
