import React from "react";
import "./BestSeller.css";
import useFetch from "../../hooks/useFetch";

export default function BestSeller() {
  const { allProducts, ispending } = useFetch(
    "https://fakestoreapi.com/products"
  );
  return (
    <div className="best-seller-wrapper">
      <div className="best-seller-view">
        <img src="./images/parsamazing.png" alt="" />
        <button src="#">مشاهده همه</button>
      </div>

      {ispending && allProducts.slice(11, 14).map((product) => (
          <div key={product.id} className="best-seller-product">
            <div className="best-seller-img">
              <img src={product.image} alt={product.title} />
            </div>
            <span className="best-seller-name">{product.title}</span>
            <div className="best-seller-price">
              <span className="best-seller-price-last">{product.price}</span>
              <span className="best-seller-price-new">{product.price}</span>
              <span className="best-seller-price-off">12%</span>
            </div>
          </div>
        ))}
    </div>
  );
}
