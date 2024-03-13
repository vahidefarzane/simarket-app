import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

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
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return [response, error, loading, axiosFetch];
};

export default useAxios;

const baseUrl = process.env.REACT_APP_BASE_URL;

export const httpService = axios.create({
  baseURL:baseUrl,
});
