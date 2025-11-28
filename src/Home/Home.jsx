import React from 'react'
import NewsSection from '../Components/News/NewsSection';
import { blogPosts } from '../Components/News/NewsData';
function Home() {
  return (
    <>
      <div className='container d-flex flex-column align-items-center mt-5'>
        <span className='text-secondary fs-6 mb-3'>Check out popular products</span>
        <h2 className='fs-1 fw-bold'>Popular Products</h2>
      </div>
      <NewsSection newsData={blogPosts} limit={3} />
    </>
  )
}

export default Home
