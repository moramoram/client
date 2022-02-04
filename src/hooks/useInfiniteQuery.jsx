import { axiosInstance } from "@/utils";
import { useInfiniteQuery } from "react-query";

const fetchPage = async (type, pageParam) => {
  const res = await axiosInstance({
    url: `/boards/types/${type}?offset=${pageParam}`,
  });
  return res.data;
};

export const GetInfiniteQuery = () =>
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

export const convertToJobCard = (data) => {
  const cardData = data.map((card) => {
    return {
      contents: {
        title: card.title,
        subtitle: "싸페 디자인 시스템",
        highlight: "D-day",
        src: "",
      },
      badges: ["JavaScript", "React", "Vue.js"],
      id: "/study/1",
    };
  });

  return { cardData };
};

export const convertToStudyCard = (data) => {
  const cardData = data.map((card) => {
    return {
      contents: {
        title: card.title,
        subtitle: `${card.writerInfo.nickname} (${card.writerInfo.ordinal}/${card.writerInfo.campus} )`,
        highlight: !!card.recruitment ? "모집중" : "모집완료",
        src: "",
      },
      badges: card.tech_stack.split(),
      id: `/study/${card.studyId}`,
      isDisabled: !card.recruitment,
    };
  });

  return { cardData };
};
