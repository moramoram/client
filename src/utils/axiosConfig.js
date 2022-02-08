import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("ssafe_token"));

  if (token) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
