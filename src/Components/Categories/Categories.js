import React, { useState } from "react";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiEarrings } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import "./Categories.css";
import { Link } from "react-router-dom";
export default function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, icon: <AiOutlineLaptop />, name: "الکترونیک" },
    { id: 2, icon: <GiEarrings />, name: "زیور آلات" },
    { id: 3, icon: <GiAmpleDress />, name: "لباس زنانه" },
    { id: 4, icon: <FaUserTie />, name: "لباس مردانه" },
  ]);
  return (
    <div className="categories-wrapper">
      <h1 className="categories-title">دسته بندی ها</h1>
      <div className="category-wrapper">
        {categories.map((category) => (
          <Link className="category">
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
