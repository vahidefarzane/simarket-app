import React,{useEffect,useState} from "react";
import "./BestSeller.css";

export default function BestSeller() {
  const [bestSeller, setbestSeller] = useState("");
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((products) => {
        setbestSeller(products);
      });
  };

  return (
    <div className="best-seller-wrapper">
      <div className="best-seller-view">
        <img src="./images/parsamazing.png" alt="" />
        <button src="#">مشاهده همه</button>
      </div>
      
      {bestSeller.length &&
          bestSeller.slice(11, 14).map((product) => (
            <div className="best-seller-product">
              <div className="best-seller-img">
                <img src={product.image} alt={product.title} />
              </div>
              <span className="best-seller-name">{product.title}</span>
              <div className="best-seller-price">
                <span className="best-seller-price-last">
                  {product.price}
                </span>
                <span className="best-seller-price-new">
                  {product.price}
                </span>
                <span className="best-seller-price-off">12%</span>
              </div>
            </div>
          ))}
     
    </div>
  );
}
