import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  // baseURL: "https://airbnb-api.up.railway.app",
  withCredentials: true,
});

export default axiosInstance;
