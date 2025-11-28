import React from 'react';
import NewsCard from './NewsCard'; 
import HeaderOfSections from '../../Components/headerOfSections/headerOfSections';
const NewsSection = ({ newsData, limit }) => {
  return (
    <>
           {/* <HeaderOfSections
        title="News"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      /> */}
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
    </>
  );
};

export default NewsSection;