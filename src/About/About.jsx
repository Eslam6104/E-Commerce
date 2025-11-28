import React from "react";
import HeaderOfSections from '../Components/headerOfSections/headerOfSections';
import TestimonialsSection from "./TestimonialsSection"
import { href } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/jordans.css";
import ShoeTtrends from "./ShoeTrends";
import NewsLetter from "../Components/newsLetter";
import AboutHero from "./AboutHero";
import TeamSection from "./OurTeam/TeamSection";
function About() {
  return (
    <>
      <div style={{ padding: "50px" }}>
      <HeaderOfSections
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      </div>
      <AboutHero></AboutHero>
      <TeamSection></TeamSection>
      <TestimonialsSection></TestimonialsSection>
      <ShoeTtrends></ShoeTtrends>
      <NewsLetter></NewsLetter>
    </>
  );
}

export default About;
