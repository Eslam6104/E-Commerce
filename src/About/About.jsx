import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/jordans.css";
import ShoeTtrends from "../About/ShoeTrends";
import NewsLetter from "../components/newsLetter";
import HeaderOfSections from './../Components/headerOfSections/headerOfSections';
import AboutHero from "./AboutHero";
import TeamSection from "./OurTeam/TeamSection";
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
      <TeamSection></TeamSection>
    <ShoeTtrends></ShoeTtrends>
    <NewsLetter></NewsLetter>
    </>
  );
}

export default About;
