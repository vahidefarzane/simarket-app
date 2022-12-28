import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [allProducts, setAllProducts] = useState("");
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((products) => {
        setAllProducts(products);
        setIsPending(false);
      });
  }, []);
  return { allProducts, isPending };
}
