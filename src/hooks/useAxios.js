import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://online-shop-json-server.onrender.com";
// axios.defaults.baseURL = "http://localhost:4000";

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

// const BASE_URL = "http://localhost:4000";
const BASE_URL = "https://online-shop-json-server.onrender.com";

export const httpService = axios.create({
  baseURL: BASE_URL,
});
export const httpInterceptedService = axios.create({
  baseURL: BASE_URL,
});

httpInterceptedService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    return config;
  },
  (error) => {Promise.reject(error)}
);
