import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../img/not_found.png";
const NotFound = () => {
  return (
    <div className="not_found text-center fs-3">
      <img className="img-fluid" src={notFoundImg} alt="" />
      <p>
        OPPS!! Page NOT Found. Go to
        <Link to="/" className="ms-1 text-success">
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
