import Axios from "axios";

const getRefreshToken = () => {
  console.log("refresh");
  return null;
};

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
    if (
      err.response.status === "401" &&
      err.response.message === "Expired access token."
    ) {
      return getRefreshToken()
        .then((token) => {
          localStorage.setItem("ssafe_token", JSON.stringify(token));
          err.config.headers.Authorization = `Bearer ${token.accessToken}`;
          return axiosInstance.request(err.config);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
