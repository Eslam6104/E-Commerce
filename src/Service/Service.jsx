import React from 'react'
import ServiceCard from './ServicesCard'; 
import { servicesData } from './ServicesData';
function Service() {
  return (
    <div className="py-5 bg-light"> 
      <div className="container">
        <div className="row g-4">
          
          {servicesData.map((item) => (
            <div key={item.id} className="col-lg-6">
              <ServiceCard 
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Service
