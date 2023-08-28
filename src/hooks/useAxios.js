import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:4000";
const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const fetchData = async () => {
    try {
      const result = await axios.request(axiosParams);
      setIsPending(true);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { response,setResponse, error,setError, isPending };
};

export default useAxios;
