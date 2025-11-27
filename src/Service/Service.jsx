import React, { useRef } from "react";
import "../assets/style/mission2.css";
import missionImg from "../assets/images/mission2.webp";
import { setupAccordion } from "../components/accordionController";
import Mission2 from "./mission2"

function Service() {
  const description =
    "Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.";

  const detailsRef = useRef([]);
  const handleToggle = setupAccordion(detailsRef);

  return (
    <>
    <Mission2></Mission2>
    
    </>
    
  );
}

export default Service;
