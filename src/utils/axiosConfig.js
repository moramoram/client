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
    // console.log(err.response.data.message);
    if (err.response.data.message === "Expired access token.") {
      // console.log("토큰 재발급 시작");
      return getRefreshToken()
        .then((data) => {
          // console.log("토근 재발급 성공", data);
          err.config.headers.Authorization = `Bearer ${data.data.accessToken}`;
          return axiosInstance.request(err.config);
        })
        .catch((err) => {
          // console.log("토근 재발급 실패");
          localStorage.removeItem("ssafe_token");
        });
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
