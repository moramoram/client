import axios from "axios";
import { useMutation } from "react-query";

export const postScrap = async (scrapStatus) => {
  console.log("post scrap");
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};

export const PostScrap = () => useMutation("postScrap", postScrap);
