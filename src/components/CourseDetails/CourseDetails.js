import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const data = useLoaderData();
  const { picture, name, duration, about, price, rating, view, _id } = data;

  return (
    <div className=" container pb-5">
      <div className="text-center">
        <img className="w-50" src={picture} alt="" />
        <h1 className="text-uppercase">{name}</h1>
      </div>
      <p>
        <span className="fw-semibold">Details:</span> {about}
      </p>
      <p>
        {" "}
        <span className="fw-semibold">Duration: </span> {duration}
      </p>
      <p>
        <span className="fw-semibold">Price:</span> ${price}
      </p>
      <div className="d-flex justify-content-between">
        <p>
          <span className="fw-semibold">Rating: </span> {rating}⭐
        </p>
        <p>
          <span className="fw-semibold">Views:</span> {view}
        </p>
      </div>
      <Link
        to={`/checkout/${_id}`}
        type="button"
        className="btn btn-outline-success"
      >
        Get premium access
      </Link>
    </div>
  );
};

export default CourseDetails;
