import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://online-shop-json-server.iran.liara.run";

const useAxios = ({
  url,
  method,
  body = null,
  headers = null,
  startOpration = false,
}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios[method](url, body, headers);
      setLoading(false);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    if(!startOpration){

    }
  }, [url, method, body, headers]);

  return { response, setResponse, error, setError, loading, setLoading };
};

export default useAxios;
