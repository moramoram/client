import { axiosInstance } from "@/utils";
import { useInfiniteQuery } from "react-query";

const URL = {
  1: "/studies/search",
  2: "/studies/scraps/users",
};

const fetchPage = async (data, pageParam) => {
  const param = {
    ...data,
    offset: pageParam,
  };
  const res = await axiosInstance({
    url: URL[data.category],
    params: param,
  });
  return { res: res.data, nextPage: pageParam + 1 };
};

export const GetStudyList = (data) =>
  useInfiniteQuery(
    ["getStudyList", data],
    ({ pageParam = 1 }) => fetchPage(data, pageParam),
    {
      getNextPageParam: (prevPage) => {
        return !!prevPage.res.length ? prevPage.nextPage : undefined;
      },
    }
  );

export const StudyCardSelector = (data) => {
  const totalData = data.pages.map((page) => {
    const items = page.res.map((card) => {
      return {
        contents: {
          title: card.title,
          subtitle: `${card.writerInfo.nickname} (${card.writerInfo.ordinal}/${card.writerInfo.campus} )`,
          highlight: !!card.recruitment ? "모집중" : "모집완료",
          src: "",
        },
        badges: !!card.techStack ? card?.techStack?.split(",") : [],
        id: `/study/${card.studyId}`,
        isDisabled: !card.recruitment,
      };
    });
    return items;
  });
  const cardData = totalData.flat();
  return { cardData };
};
