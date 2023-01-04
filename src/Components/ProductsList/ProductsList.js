import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./ProductsList.css";

export default function ProductsList() {
  // const { allProducts, ispending } = useFetch(
  //   "https://fakestoreapi.com/products"
  // );
  const [categories, setAllcategories] = useState("");
  const [categoriesIsPending, setCategoriesIsPending] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products/categories")
  //     .then((category) => {
  //       console.log(category.data);
  //       setAllcategories(category.data);
  //       setCategoriesIsPending(true);
  //     });
  // }, []);
  return (
    <div className="product-list-container">
      <div className="product-list-sidebar">
        <div className="product-list-filter-price">
          <h1>فیلتر بر اساس قیمت</h1>
          <input type="range" />
          <div className="show-filter-price-range">
            <span>500,000</span>
            <span>100,000</span>
          </div>
          <button>صافی</button>
        </div>
        <div className="product-list-search">
          <h1>جستجو در محصولات</h1>
          <div className="product-list-search-box">
            <input type="search" />
            <button>جستجو</button>
          </div>
        </div>
        <div className="product-categories-list">
          <h1>فیلتر بر اساس دسته بندی</h1>
          {categoriesIsPending &&
            categories.map((category) => (
              <>
                <input type="checkbox" name="favorite_pet" value={category} />
                <span>{category}</span>
                <br />
              </>
            ))}
        </div>
      </div>
      <div className="product-list-box">
        <div className="filtered-tab"></div>
        <h1>مرتب سازی بر اساس </h1>
        <ul>
          <li>محبوب ترین</li>
          <li>پر بازدید ترین</li>
          <li>ارزان ترین</li>
          <li>گران ترین</li>
        </ul>
      </div>
    </div>
  );
}
