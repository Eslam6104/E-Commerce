import React from "react";
import HeaderOfSections from '../Components/headerOfSections/headerOfSections';
import TestimonialsSection from "./TestimonialsSection"
import { href } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/jordans.css";
import ShoeTtrends from "./ShoeTrends";
import NewsLetter from "../Components/newsLetter";
import AboutHero from "./AboutHero";

function About() {
  return (
    <>
      <HeaderOfSections
        title="About US"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutHero></AboutHero>
      <ShoeTtrends></ShoeTtrends>
      <TestimonialsSection></TestimonialsSection>
      <NewsLetter></NewsLetter>
    </>
  );
}

export default About;
