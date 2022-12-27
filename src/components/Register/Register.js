import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto">
      <div className="row mt-3">
        <form className="col-md-6 mx-auto border p-3">
          <div className="mb-3">
            <label
              htmlFor="exampleInputFullName"
              className="form-label fw-semibold"
            >
              Full name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputFullName"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label fw-semibold"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Image URL
            </label>
            <input type="text" className="form-control" id="exampleInputImg" />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-semibold"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 text-center">
            Already have an account? <Link to="/login">Login Now</Link>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
