import React from "react";
import { Link } from "react-router-dom";
import GitHubAuth from "../Authentication/GitHubAuth";
import GoogleAuth from "../Authentication/GoogleAuth";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="row mt-3">
        <div className="col-md-6  mx-auto">
          <form className="border p-3">
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
              New in Tech Guru? Please <Link to="/register">Register Now</Link>{" "}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Log In
            </button>
          </form>
          <p className="text-center mt-3">
            ______ or use one of these options ______
          </p>
          <div className="d-flex justify-content-center">
            <GoogleAuth></GoogleAuth>
            <GitHubAuth></GitHubAuth>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
