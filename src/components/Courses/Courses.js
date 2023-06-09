import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://tech-guru-server-chi.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row py-3 ps-2">
        <div className="col-md-2 col-12 mt-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-10 col-12">
          <div className="row g-2 mt-3">
            {courses.map((course) => {
              const { _id, name, picture, about, price } = course;
              return (
                <div key={_id} className="col-md-4 col-12">
                  <div className="p-3 border  bg-light">
                    <img className="img-fluid" src={picture} alt="" />
                    <h5>{name}</h5>
                    <p> {about.slice(0, 100)}.... </p>
                    <p className="fw-semibold">Price: ${price}</p>
                    <Link
                      to={`/courseDetails/${_id}`}
                      className="btn btn-success"
                    >
                      Course Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Courses;
