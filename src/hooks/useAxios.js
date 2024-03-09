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
      if(err.response.data === "Email already exists"){
        setError("حساب کاربری با این ایمیل موجود است");
      }
      if(err.response.data === "Password is too short"){
        setError("رمز عبور کوتاه است");
      }
      ;
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



