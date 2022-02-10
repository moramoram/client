import Axios from "axios";
import { getRefreshToken } from "@/api";

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
    if (err.response.data.message === "Expired access token.") {
      return getRefreshToken()
        .then((data) => {
          console.log("토근 재발급 성공");
          localStorage.setItem("ssafe_token", JSON.stringify(data));
          err.config.headers.Authorization = `Bearer ${data.accessToken}`;
          return axiosInstance.request(err.config);
        })
        .catch((err) => {
          console.log("토근 재발급 실패");
          console.log(err);
        });
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
