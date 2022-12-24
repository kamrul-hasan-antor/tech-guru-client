import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="list-group">
      <p className="fw-semibold px-1">Total {categories.length} Categories</p>
      {categories.map((category) => {
        return (
          <Link
            to={`/category/${category.id}`}
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
