import axios from "axios";
import { useQuery } from "react-query";

export const fetchDummyData = async (data) => {
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};

export const GetDummyApi = () => useQuery(["dummy"], fetchDummyData);
