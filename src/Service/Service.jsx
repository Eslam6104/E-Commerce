import ServiceCard from './ServicesCard'; 
import { servicesData } from './ServicesData';
import HeaderOfSections from '../Components/headerOfSections/headerOfSections';
import React, { useRef } from "react";
import "../assets/style/mission2.css";
import Mission1 from "./Mession1/Mission1";
import Mission2 from "./Mission2";
import ServiceBrands from "./ServiceBrand";
import TeamSection from "./OurTeam/TeamSection";

function Service() {


  return (
    <>
    <HeaderOfSections
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
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
      <ServiceBrands></ServiceBrands>
      <TeamSection></TeamSection>
      <Mission1></Mission1>
    <Mission2></Mission2>
    </>
  )
}

export default Service;
