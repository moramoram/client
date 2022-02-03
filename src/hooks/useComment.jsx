import axios from "axios";

export const postComment = async () => {
  console.log("post comment");
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};
