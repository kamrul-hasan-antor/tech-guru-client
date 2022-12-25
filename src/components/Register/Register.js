import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../Authentication/GoogleAuth";

const Register = () => {
  return (
    <div className="container mx-auto">
      <div className="row mt-3">
        <form className="col-md-6 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
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
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            Already have an account? <Link to="/login">Login Now</Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
};

export default Register;
