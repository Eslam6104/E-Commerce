import React from 'react'
import NewsSection from '../Components/News/NewsSection';
import { blogPosts } from '../Components/News/NewsData';
import HeaderOfSections from '../Components/headerOfSections/headerOfSections';


function New() {
  return (
    <>
        {/* title */}
      <HeaderOfSections
        title="News"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      />

      <NewsSection newsData={blogPosts} limit={6} />
    </>
  )
}

export default New
