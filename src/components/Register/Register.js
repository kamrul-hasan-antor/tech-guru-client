import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  // console.log(createUser);
  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL,
        });
        const user = res.user;

        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="row mt-3">
        <form
          onSubmit={handleRegisterUser}
          className="col-md-6 mx-auto border p-3"
        >
          <div className="mb-3">
            <label
              htmlFor="exampleInputFullName"
              className="form-label fw-semibold"
            >
              Full name
            </label>
            <input
              name="fullName"
              type="text"
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
              name="email"
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
            <input
              name="photoURL"
              type="text"
              className="form-control"
              id="exampleInputImg"
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
            />
          </div>
          <div className="mb-3 text-center">
            Already have an account? <Link to="/login">Login Now</Link>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
