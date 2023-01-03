import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [allProducts, setAllProducts] = useState("");
  const [ispending, setIsPending] = useState(false);

  useEffect(() => {
    axios.get(url).then((products) => {
      setAllProducts(products.data);
      setIsPending(true)
    });
  }, []);
  return { allProducts ,ispending};
}
