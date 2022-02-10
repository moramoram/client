import axios from "axios";

export const getRefreshToken = async () => {
  const token = JSON.parse(localStorage.getItem("ssafe_token"));
  const res = await axios.put(
    `${process.env.REACT_APP_API_URL}/users/refresh`,
    {
      headers: {
        Authorization: `Bearer ${token.refreshToken}`,
      },
    }
  );
  return res.data;
};
