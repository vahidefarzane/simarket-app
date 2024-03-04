import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://online-shop-json-server.onrender.com";

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); 

  const axiosFetch = async (configObj) => {
    const { method, url, requestConfig = {} } = configObj;

    try {
      const res = await axios[method.toLowerCase()](url, {
        ...requestConfig,
      });


      setResponse(res.data);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [response, error, loading, axiosFetch]
};

export default useAxios;
