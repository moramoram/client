import axios from "axios";
import { useQuery } from "react-query";

export const fetchDummyData = async (data) => {
  console.log("Fetch", data);
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};

export const GetDummyApi = () => useQuery(["dummy"], fetchDummyData);
