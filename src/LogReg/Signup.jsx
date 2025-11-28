import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useAuthForm from './useAuthForm';

function Signup() {
  const { register, handleSubmit, errors, onSubmit } = useAuthForm('signup');
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Toaster position="top-center" />

      <div className="card border-0 shadow-lg p-4" style={{ maxWidth: "450px", width: "100%" }}>
        
        {/* Header */}
        <div className="text-center mb-4">
          <h2 style={{fontWeight: "bold", letterSpacing: "1px"}}>SIGN UP</h2>
          <p className="text-muted small">Create your account to start shopping</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-3">
            <label className="form-label fw-bold small">Full Name</label>
            <input
              type="text"
              className={`form-control rounded-0 p-3 ${errors.name ? "is-invalid" : ""}`}
              placeholder="Ex: Omar Ayoub"
              {...register("name")}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold small">Email Address</label>
            <input
              type="email"
              className={`form-control rounded-0 p-3 ${errors.email ? "is-invalid" : ""}`}
              placeholder="name@example.com"
              {...register("email")}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold small">Password</label>
            <input
              type="password"
              className={`form-control rounded-0 p-3 ${errors.password ? "is-invalid" : ""}`}
              placeholder="******"
              {...register("password")}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold small">Confirm Password</label>
            <input
              type="password"
              className={`form-control rounded-0 p-3 ${errors.confirmPassword ? "is-invalid" : ""}`}
              placeholder="******"
              {...register("confirmPassword")}
            />
            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
          </div>

          <button 
            type="submit" 
            className="btn btn-dark w-100 rounded-0 py-3 mt-3 fw-bold text-uppercase"
            style={{ letterSpacing: "2px" }}
          >
            Register
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-4">
          <p className="small text-muted">
            Already have an account? 
            <Link to="/signin" className="ms-2 fw-bold text-dark text-decoration-underline">
              Log In
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Signup
