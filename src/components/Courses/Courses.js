import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-2">
        {courses.map((course) => {
          const { _id, name, picture, about, price } = course;
          return (
            <div key={_id} class="col-4">
              <div class="p-3 border  bg-light">
                <img className="img-fluid" src={picture} alt="" />
                <h5>{name}</h5>
                <p> {about.slice(0, 100)}.... </p>
                <p className="fw-semibold">Price: ${price}</p>
                <Link to={`/courseDetails/${_id}`} className="btn btn-success">
                  Course Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
