import React from 'react'
import HeaderOfSections from './../Components/headerOfSections/headerOfSections';
import NewsLetter from '../components/newsLetter';
import CardSecBlok from '../Components/CardSecBlock/CardSECBlok.jsx';
import { useGetProductsQuery } from "../Store/apislice";
import ContactSectionForm from './ContactSectionForm.jsx';
import { Toaster } from "react-hot-toast";

function Contact() {
      const { data: products } = useGetProductsQuery();
    const newArrivals = products ? products.slice(-4) : [];
  const popularProducts = products
    ? [...products]
        .sort((a, b) => {
          const rateA = typeof a.rating === "number" ? a.rating : a.rating?.rate ?? 0;
          const rateB = typeof b.rating === "number" ? b.rating : b.rating?.rate ?? 0;
          return rateB - rateA;  // ترتيب من الأعلى للأقل
        })
        .slice(0, 4)
    : [];
  return (
    <div>
        <Toaster position="top-center" />
       <HeaderOfSections
        title="Contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
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
  )
}

export default Contact
