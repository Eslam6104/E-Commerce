import React, { useRef } from "react";
import "../assets/style/mission2.css";
<<<<<<< HEAD
import missionImg from "../assets/images/mission2.webp";
import Mission2 from "./mission2"

=======
import Mission1 from "./Mession1/Mission1";
import Mission2 from "./Mission2"
import HeaderOfSections from './../Components/headerOfSections/headerOfSections';
import ServiceBrands from "./ServiceBrand";
>>>>>>> 43ca411d67fb60961b5db9187550c0cd2c0f5d4d
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
      <Mission1></Mission1>
    <Mission2></Mission2>
    
    </>
    
  );
}

export default Service;
