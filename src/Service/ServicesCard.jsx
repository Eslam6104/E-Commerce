import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="p-5 text-white h-100 " style={{ backgroundColor: "#000" , minWidth:"300px" }}>
      <div className="d-flex align-items-start m-4">
        {/* 1. Icon Section */}
        <div className="me-4 text-white">
            {icon}
        </div>

        {/* 2. Text Section */}
        <div>
          <h4 className="fw-bold mb-3">{title}</h4>
          <p className="text-secondary mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;