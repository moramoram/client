import axios from "axios";
import { useMutation } from "react-query";

export const PostComment = () => useMutation("postComment", postComment);

export const postComment = async () => {
  console.log("post comment");
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};
