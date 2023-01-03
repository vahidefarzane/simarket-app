import React from "react";
import useFetch from "../../hooks/useFetch";
import "./NewestProducts.css";

export default function NewestProducts() {
  const { allProducts, ispending } = useFetch(
    "https://fakestoreapi.com/products"
  );
  return (
    <div className="newest-products-wrapper">
      <div className="newest-products-top">
        <h1>جدیدترین کالاها</h1>
        <button>نمایش همه</button>
      </div>
      <div className="newest-product-info-wrapper">
        {ispending && allProducts.slice(11, 15).map((product) => (
          <div key={product.id} className="newest-product-info">
            <div className="newest-product-img">
              <img src={product.image} alt={product.title} />
            </div>
            <span className="newest-product-name">{product.title}</span>
            <div className="newest-product-price">
              <span className="newest-product-price-last">{product.price}</span>
              <span className="newest-product-price-new">{product.price}</span>
              <span className="newest-product-price-off">12%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
