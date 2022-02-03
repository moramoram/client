import React from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { useQuery, useInfiniteQuery } from "react-query";
import axios from "axios";

import { CardGrid } from "@/containers";

const JobCardGrid = () => {
  const theme = useRecoilValue(themeState);

  const { items } = useQuery(
    "fetchLuke",
    () => axios("http://swapi.dev/api/people/1/"),
    { suspense: true }
  );

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    "projects",
    async ({ pageParam = 0 }) => {
      const res = await axios.get("/api/projects?cursor=" + pageParam);
      return res.data;
    },
    {
      getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
      getNextPageParam: (lastPage) => lastPage.nextId ?? false,
    }
  );

  return <CardGrid data={cardData} theme={theme} />;
};

export default JobCardGrid;

const cardData = new Array(24).fill({
  contents: {
    title: "주니어 프론트엔드 채용",
    subtitle: "싸페 디자인 시스템",
    highlight: "D-day",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
  id: "/job/1",
});
