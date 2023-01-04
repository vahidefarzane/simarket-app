import React from "react";
import "./Product.css";
import {AiFillStar} from 'react-icons/ai'
import {RiShareForwardBoxFill} from 'react-icons/ri'

export default function Product(props) {
  const { productImage, productTtile, productPrice } = props;
  return (
    <div className="product-container">
      <img src={productImage} alt="" />
      <div className="product-details">
        <h3>{productTtile}</h3>
        <div class="product-stock_box">
          <div class="stock-archive">
            <RiShareForwardBoxFill className="stock-icon"/>
            <span class="in-stock">موجود در انبار</span>
          </div>
          <div class="product-rating-box">
            <AiFillStar className="raiting-icon"/>
            <AiFillStar className="raiting-icon"/>
          </div>
        </div>
        <div className="product-price-box">
          <del className="product-price-last">{productPrice}</del>
          <span className="product-price-new">{productPrice} تومان</span>
          <span className="product-price-off">12%</span>
        </div>
      </div>
    </div>
  );
}
