import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Product from "../Product/Product";
import { BiSortDown } from "react-icons/bi";
import "./ProductsList.css";

export default function ProductsList() {
  const [categories, setAllcategories] = useState("");
  const [categoriesIsPending, setCategoriesIsPending] = useState(false);
  const { allProducts, ispending } = useFetch(
    "https://fakestoreapi.com/products"
  );
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((category) => {
        console.log(category.data);
        setAllcategories(category.data);
        setCategoriesIsPending(true);
      });
  }, []);
  return (
    <div className="product-list-container">
      <div className="product-list-sidebar">
        <div className="product-list-filter-price">
          <h2>فیلتر بر اساس قیمت</h2>
          <input type="range" />
          <div className="show-filter-price-range">
            <span className="maximum-price">500,000</span>
            <span className="minimum-price">100,000</span>
          </div>
          <button>صافی</button>
        </div>
        <div className="product-list-search">
          <h2>جستجو در محصولات</h2>
          <div className="product-list-search-box">
            <input type="search" />
            <button>جستجو</button>
          </div>
        </div>
        <div className="product-categories-list">
          <h2>فیلتر بر اساس دسته بندی</h2>
          {categoriesIsPending &&
            categories.map((category) => (
              <>
                <input type="checkbox" name="category" value={category} />
                <span className="product-category-sidebar">{category}</span>
                <br />
              </>
            ))}
        </div>
      </div>
      <div className="product-list-box">
        <div className="product-list-head">
          <BiSortDown className="sort-icon-haed" />
          <h2>مرتب سازی بر اساس: </h2>
          <ul className="product-filtered-head-title">
            <li>پیشفرض</li>
            <li>محبوب ترین</li>
            <li>پر بازدید ترین</li>
            <li>ارزان ترین</li>
            <li>گران ترین</li>
          </ul>
        </div>
        <div className="all-products-list">
          {ispending &&
            allProducts.map((product) => (
              <Product
                className="product-wrapper"
                key={product.id}
                productImage={product.image}
                productTtile={product.title}
                productPrice={product.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
