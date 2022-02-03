import { useQuery } from "react-query";
import { axios } from "axios";

const getStudyPostById = async (postId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return data;
};

export default function usePost(postId) {
  const res = useQuery(["post", postId], () => getStudyPostById(postId));
  const res = 
}
