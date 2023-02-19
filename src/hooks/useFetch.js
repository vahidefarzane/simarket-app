import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [allProducts, setAllProducts] = useState("");
  const [ispending, setIsPending] = useState(false);
  const [categories, setCategories] = useState(null);
  const [categoriesIsPenging, setCategoriesIsPenging] = useState(false);
  const [bannerImgs, setBannerImgs] = useState(null);
  const [bannerImgsIsPending, setBannerImgsIsPending] = useState(false);

  useEffect(() => {
    axios.get(url).then((products) => {
      setAllProducts(products.data);
      setIsPending(true);
    });
    axios.get(url).then((category) => {
      setCategoriesIsPenging(true);
      setCategories(category.data);
    });
    axios.get(url).then((bannerImg) => {
      setBannerImgs(bannerImg.data);
      setBannerImgsIsPending(true);
    });
  }, []);
  return {
    allProducts,
    ispending,
    categories,
    categoriesIsPenging,
    bannerImgs,
    bannerImgsIsPending,
  };
}
