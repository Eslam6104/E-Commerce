import React, { useRef } from "react";
import "../assets/style/mission2.css";
import Mission1 from "./Mession1/Mission1";
import Mission2 from "./Mission2"
import HeaderOfSections from './../Components/headerOfSections/headerOfSections';
import ServiceBrands from "./ServiceBrand";
import TeamSection from "./OurTeam/TeamSection";
function Service() {


  return (
    <>
       <HeaderOfSections
        title="Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service" },
        ]}
      />
      <ServiceBrands></ServiceBrands>
      <TeamSection></TeamSection>
      <Mission1></Mission1>
    <Mission2></Mission2>
    
    </>
    
  );
}

export default Service;
