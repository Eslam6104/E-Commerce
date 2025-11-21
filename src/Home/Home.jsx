import React from 'react'
import NewsSection from '../Components/News/NewsSection';
import { blogPosts } from '../Components/News/NewsData';
function Home() {
  return (
      <NewsSection newsData={blogPosts} limit={3} />
    
  )
}

export default Home
