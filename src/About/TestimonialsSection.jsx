import React from 'react';
import './Testimonials.css'; // Import the CSS file

const TestimonialsSection = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        
        {/* 1. Left Column: Large Image */}
        <div className="col-lg-7 p-0">
          <img 
            src="https://res.cloudinary.com/dcwhmrmqa/image/upload/v1764318743/testimonial-image_optimized_hssvqk.webp" 
            alt="Fashion Model" 
            className="w-100 img-fluid testimonial-image"
          />
        </div>

        {/* 2. Right Column: Testimonial Box */}
        <div className="col-lg-5">
          <div className="testimonial-box shadow-lg text-white">
            

            {/* Main Content */}
            <div style={{ position: 'relative', zIndex: 3 }}>
                <h2 className="testimonial-title mb-4">Testimonials</h2>

                <p className="text-secondary mb-5" style={{ lineHeight: '1.8', fontSize: '1rem' }}>
                Vitae ultricies leo integer malesuada euismod. 
                Odio tempor orci dapibus ultrices in. Egestas diam in cursus euismod. 
                Dictum purus viverra accumsan in nislempor.
                </p>

                {/* User Info Section */}
                <div className="d-flex align-items-center">
                <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Jane Blayck" 
                    className="user-avatar me-3"
                />
                <div>
                    <h5 className="mb-0 fw-bold" style={{ color: '#dc3545' }}>Jane Blayck</h5>
                </div>
                </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;