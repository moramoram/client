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
  console.log(token.refreshToken);
  if (token) {
    config.headers.Authorization = `Bearer ${token.refreshToken}`;
  }
  return config;
});

export const getRefreshToken = async () => {
  const res = await axiosInstance({
    url: `/users/refresh`,
    method: "put",
  });
  return res.data;
};
