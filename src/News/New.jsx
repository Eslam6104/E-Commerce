import React from 'react'
import NewsSection from '../Components/News/NewsSection';
import { blogPosts } from '../Components/News/NewsData';


function New() {
  return (
      <NewsSection newsData={blogPosts} limit={6} />
  )
}

export default New
