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

const fetchMyPage = async (pageParam) => {
  const param = { offset: pageParam };
  const res = await axiosInstance({
    url: `/studies/users`,
    params: param,
  });
  return { res: res.data, nextPage: pageParam + 1 };
};

export const GetMyStudyList = () =>
  useInfiniteQuery(
    "getMyStudyList",
    ({ pageParam = 1 }) => fetchMyPage(pageParam),
    {
      getNextPageParam: (prevPage) => {
        return !!prevPage.res.length ? prevPage.nextPage : undefined;
      },
    }
  );

export const StudyCardSelector = (data) => {
  const onOff = {
    0: "온라인",
    1: "오프라인",
    2: "온/오프라인",
  };

  const totalData = data?.pages.map((page) => {
    const items = page.res.map((card) => {
      const writerDetail =
        card.writerInfo.ordinal && card.writerInfo.campus
          ? ` (${card.writerInfo.ordinal}기 / ${card.writerInfo.campus})`
          : null;

      const badgeData = [
        card.studyType,
        onOff[card.onOff],
        card?.techStack?.split(",")[0],
      ].filter((data) => data);

      return {
        contents: {
          title: card.title,
          subtitle: [card.writerInfo.nickname, writerDetail],
          highlight: card.recruitment ? "모집중" : "모집완료",
          src: card.thumbnailImg,
        },
        badges: badgeData,
        id: `/study/${card.studyId}`,
        isDisabled: !card.recruitment,
      };
    });
    return items;
  });
  const cardData = totalData?.flat();
  return { cardData };
};
