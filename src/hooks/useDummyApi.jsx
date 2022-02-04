import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async () => {
  console.log("API");
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};

export const useDummyApi = () => useQuery(["dummy"], fetchData);
