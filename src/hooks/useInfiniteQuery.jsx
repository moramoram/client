import { axiosInstance } from "@/utils";
import { useInfiniteQuery } from "react-query";

const fetchPage = async (type, page) => {
  const res = await axiosInstance({
    url: `/boards/types/${type}?offset=${page}`,
  });
};

const GetInfiniteQuery = () =>
  useInfiniteQuery(
    "infiniteScroll",
    ({ pageParam = 1 }) => fetchPage(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 1,
    }
  );
