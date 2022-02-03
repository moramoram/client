import { useQuery } from "react-query";
import axios from "axios";

export const fetchTodoList = async () => {
  const { data } = await axios.get("https://picsum.photos/200");
  return data;
};

export const useGetItems = () =>
  useQuery(
    fetchTodoList //Simple fetch function
  );
