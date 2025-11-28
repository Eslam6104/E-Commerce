import React from "react";
import { teamData } from "./TeamData";
import TeamCard from "./TeamCard";

function TeamSection({ data = teamData }) {
  return (
    <section className="py-5">
      <div className="container text-center">
        
        <p className="text-muted">Ready to help you</p>
        <h2 className="fw-bold mb-5" style={{ fontSize: "2.2rem" }}>
          Our Team
        </h2>

        <div className="row justify-content-center">
          {data.map((member, index) => (
            <div
              className="col-12 col-sm-6 col-md-3 mb-4"
              key={index}
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamSection;
