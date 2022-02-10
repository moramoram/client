import { axiosInstance, daysLeftFromToday } from "@/utils";
import { useInfiniteQuery } from "react-query";

const fetchPage = async (type, pageParam) => {
  const res = await axiosInstance({
    url: `/boards/types/${type}?offset=${pageParam}`,
  });
  return res.data;
};

export const GetJobItems = () =>
  useInfiniteQuery("getJobItems", ({ pageParam = 1 }) => fetchPage(pageParam), {
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.isLast) return lastPage.nextPage;
      return undefined;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: 1,
  });

export const JobCardSelector = (data) => {
  const cardData = data.map((card) => {
    const dday = daysLeftFromToday(card.closeDate);
    return {
      contents: {
        title: card.title,
        subtitle: card.company.companyName,
        highlight: dday ? dday : "모집마감",
        src: card.company.logoImg,
      },
      badges: card.techStack.split(","),
      id: `/job/${card.studyId}`,
      isDisabled: false,
    };
  });

  return { cardData };
};
