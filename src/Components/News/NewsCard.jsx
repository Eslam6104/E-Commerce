import React from 'react';

const NewsCard = ({ image, title, description, category, date }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="h-100">
        {/* image */}
        <div className="mb-3 overflow-hidden">
          <img 
            src={image}
            alt={title} 
            className="w-100 img-fluid" 
            style={{ height: '300px',}} 
          />
        </div>

        {/* content */}
        <div>
          <h5 className="fw-bold mb-3">{title}</h5>
          <p className="text-muted mb-3">
            {description}
          </p>
          
          {/* (Category & Date) */}
          <p className="text-muted text-uppercase" style={{ fontSize: '0.8rem' }}>
            <span className="fw-bold text-dark">IN {category}</span> 
            <span className="mx-2">/</span> 
            ON {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;