import React from "react";
function TeamCard({ member }) {
  return (
    <div className="text-center">
      <div className="mb-3">
        <img
          src={member.image}
          alt={member.name}
          className="img-fluid w-100"
          style={{
            objectFit: "cover",
            maxHeight: "380px",
            backgroundColor: "#f5f5f5",
          }}
        />
      </div>

      <h4 className="fw-bold mb-1">{member.name}</h4>
      <p className="text-danger fw-semibold">{member.role}</p>
    </div>
  );
}

export default TeamCard;
