import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [allProducts, setAllProducts] = useState("");
  const [ispending, setIsPending] = useState(false);

  const [categories, setCategories] = useState("");
  const [categoriesIsPenging, setCategoriesIsPenging] = useState(false);
  const [bannerImgs, setBannerImgs] = useState("");
  const [bannerImgsIsPending, setBannerImgsIsPending] = useState(false);

  const [sortByStars, setSortByStars] = useState(null);
  const [sortBySale, setSortBySale] = useState(null);
  const [sortByPriceUp, setSortByPriceUp] = useState(null);
  const [sortByPriceDown, setSortByPriceDown] = useState(null);

  const [product, setProduct] = useState("");
  const [ispendingProduct, setIspendingProduct] = useState(false);

  const [cities, setCities] = useState(null);

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
      setSortByStars(product.data);
    });
    axios.get(url).then((product) => {
      setSortBySale(product.data);
    });
    axios.get(url).then((product) => {
      setSortByPriceUp(product.data);
    });
    axios.get(url).then((product) => {
      setSortByPriceDown(product.data);
    });
    axios.get(url).then((cities) => {
      setCities(cities.data);
    });
    axios.get(url).then((product) => {
      setIspendingProduct(true);
      setProduct(product.data);
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

    sortByStars,
    sortBySale,
    sortByPriceUp,
    sortByPriceDown,
    cities,
    setCities,
    product,
    ispendingProduct,
  };
}
