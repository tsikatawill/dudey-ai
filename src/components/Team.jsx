import React from "react";
import DetailCard from "./DetailCard";
import { InnerCardContent } from "./DetailCards";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="header text-center">
          <h2 className="text--primary">The Advisors And The Team</h2>
          <p style={{ maxWidth: "400px", margin: "auto" }}>
            Our Main Mission: To provide affordable groundbreaking AI products
            that give businesses of all sizes
          </p>
        </div>
        <div className="team-member-cards mt-4">
          <DetailCard version="outlined" extraClasses="member-card">
            <InnerCardContent
              image={
                <img src="https://randomuser.me/api/portraits/women/24.jpg" />
              }
              title="Jane Doe"
              extraStuff={
                <>
                  <p className="m-1">Technical and AI Advisors</p>
                  <p>Assistant professor at Nanyang Technological University</p>
                </>
              }
            />
          </DetailCard>
          <DetailCard version="outlined" extraClasses="member-card">
            <InnerCardContent
              image={
                <img src="https://randomuser.me/api/portraits/women/12.jpg" />
              }
              title="Janet Doe"
              extraStuff={
                <>
                  <p>Technical and AI Advisors</p>
                  <p>Assistant professor at Nanyang Technological University</p>
                </>
              }
            />
          </DetailCard>
          <DetailCard version="outlined" extraClasses="member-card">
            <InnerCardContent
              image={
                <img src="https://randomuser.me/api/portraits/men/24.jpg" />
              }
              title="John Doe"
              extraStuff={
                <>
                  <p>Technical and AI Advisors</p>
                  <p>Assistant professor at Nanyang Technological University</p>
                </>
              }
            />
          </DetailCard>
        </div>
      </div>
    </section>
  );
};

export const TeamMemberCard = () => {};

export default Team;
