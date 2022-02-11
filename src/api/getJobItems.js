import { axiosInstance, daysLeftFromToday } from "@/utils";
import { useInfiniteQuery } from "react-query";

const fetchPage = async (data, pageParam) => {
  const param = { ...data, offset: pageParam };
  const res = await axiosInstance({
    url: `	/recruits/search`,
    params: param,
  });
  return res.data;
};

export const GetJobItems = (data) =>
  useInfiniteQuery(
    ["getJobItems", data],
    ({ pageParam = 1 }) => fetchPage(data, pageParam),
    {
      getNextPageParam: (prevPage, pages) => {
        return !!prevPage.res.length ? prevPage.nextPage : undefined;
      },
    }
  );

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
