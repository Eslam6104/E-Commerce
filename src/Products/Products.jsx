import React from "react";
import FilterComponent from "./Filter"
import HeaderOfSections from '../Components/headerOfSections/headerOfSections';

function Products() {
  return (
    <>
          <HeaderOfSections
        title="Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />
    <div style={{ padding: "2rem" }}>
      <FilterComponent/>
    </div>
    </>
  );
}

export default Products;
