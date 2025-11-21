import React from 'react';
import NewsCard from './NewsCard'; 

const NewsSection = ({ newsData, limit }) => {
  return (
    <div className="container py-5">
      <div className="row">
        {newsData.slice(0, limit).map((item, index) => (
          <NewsCard 
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;