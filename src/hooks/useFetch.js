import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [allProducts, setAllProducts] = useState("");
  const [ispending, setIsPending] = useState(false);
  const [product, setProduct] = useState("");
  const [ispendingProduct, setIspendingProduct] = useState(false);
  const [categories, setCategories] = useState("");
  const [categoriesIsPenging, setCategoriesIsPenging] = useState(false);
  const [bannerImgs, setBannerImgs] = useState("");
  const [bannerImgsIsPending, setBannerImgsIsPending] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState("");
  const [filteredPrice, setfilteredPrice] = useState(0);

  useEffect(() => {
    axios.get(url).then((products) => {
      setIsPending(true);
      setAllProducts(products.data);
    });
    axios.get(url).then((category) => {
      setCategoriesIsPenging(true);
      setCategories(category.data);
    });
    axios.get(url).then((bannerImg) => {
      setBannerImgsIsPending(true);
      setBannerImgs(bannerImg.data);
    });
    axios.get(url).then((product) => {
      setIspendingProduct(true);
      setProduct(product.data);
    });
    axios.get(url).then((product) => {
      setFilteredProducts(product.data);
    });
    axios.get(url).then((product) => {
      setfilteredPrice(product.data);
    });
  }, []);
  return {
    allProducts,
    setAllProducts,
    ispending,
    categories,
    categoriesIsPenging,
    bannerImgs,
    bannerImgsIsPending,
    product,
    ispendingProduct,
    filteredProducts,
    setFilteredProducts,
    filteredPrice,
  };
}
