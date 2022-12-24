import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/banner.png";
const Header = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 col-12 d-flex align-items-center">
          <div className="">
            <h4>Let's Start Your Journey</h4>
            <h1>
              Explore <span className="text-success fw-bold">1000+</span>{" "}
              Courses from top instructors around the world.
            </h1>
            <p>
              Take your learning to the next level. Our instructors will share
              their knowledge to people around the world.
            </p>
            <Link to="/courses">
              <button className="btn btn-success">View All Courses</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <img className="img-fluid" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
