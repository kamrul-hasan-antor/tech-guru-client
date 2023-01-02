import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import GitHubAuth from "../Authentication/GitHubAuth";
import GoogleAuth from "../Authentication/GoogleAuth";

const Login = () => {
  const { logInUser } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        setLoginError("");
      })
      .catch((err) => setLoginError(err.message));
  };
  console.log(loginError[21]);
  return (
    <div className="container mx-auto">
      <div className="row mt-3">
        <div className="col-md-6  mx-auto">
          <form onSubmit={handleLogin} className="border p-3">
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-semibold"
              >
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
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
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div>
              <p className="text-center text-danger">
                {!loginError
                  ? ""
                  : loginError.substring(22, loginError.length - 2)}
              </p>
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
