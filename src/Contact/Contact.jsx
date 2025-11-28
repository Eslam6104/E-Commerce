import React from "react";
import HeaderOfSections from "./../Components/headerOfSections/headerOfSections";
import NewsLetter from "../components/newsLetter";
import CardSecBlok from "../Components/CardSecBlock/CardSECBlok.jsx";
import { useGetProductsQuery } from "../Store/apislice";
import ContactSectionForm from "./ContactSectionForm.jsx";
import { Toaster } from "react-hot-toast";

function Contact() {
  const { data: products } = useGetProductsQuery();
  const newArrivals = products ? products.slice(-4) : [];
  return (
    <div>
      <Toaster position="top-center" />
      <div style={{ padding: "50px" }}>
        <HeaderOfSections
          title="Contact Us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
      </div>
      <ContactSectionForm />
      <CardSecBlok
        title="New Arrivals"
        subtitle="Check out latest products"
        data={newArrivals}
        limit={4}
        viewAllLink="/products"
      />
      <NewsLetter />
    </div>
  );
}

export default Contact;
