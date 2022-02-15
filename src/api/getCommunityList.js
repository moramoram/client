import { useInfiniteQuery } from "react-query";
import { axiosInstance, daysFromToday, numToMillion, parseHtml } from "@/utils";

const fetchPage = async (data, pageParam) => {
  const param = { ...data, offset: pageParam };
  const res = await axiosInstance({
    url: `/boards/search/`,
    params: param,
  });
  return { res: res.data, nextPage: pageParam + 1 };
};

export const GetCommunityList = (data) =>
  useInfiniteQuery(
    ["getCommunityList", data],
    ({ pageParam = 1 }) => fetchPage(data, pageParam),
    {
      getNextPageParam: (prevPage) => {
        return !!prevPage.res.length ? prevPage.nextPage : undefined;
      },
    }
  );

export const CommunityFeedSelector = (data) => {
  const totalData = data.pages.map((page) => {
    const items = page.res.map((card) => {
      const { thumbnail, tagDeletedHtml } = parseHtml(card.content);
      return {
        username: card.writerInfo.nickname,
        avatar: card.writerInfo.profileImg,
        campus: card.writerInfo.campus,
        ordinal: card.writerInfo.ordinal,
        created: daysFromToday(card.createdDate),
        title: card.title,
        content: tagDeletedHtml,
        thumbnail: thumbnail?.[1],
        likecount: numToMillion(card.totalLike),
        commentcount: numToMillion(card.totalComment),
        viewcount: numToMillion(card.views),
        id: card.boardId,
      };
    });
    return items;
  });
  const feedData = totalData.flat();
  return { feedData };
};

export const CommunityFeedSmallSelector = (data) => {
  const totalData = data.pages.map((page) => {
    const items = page.res.map((card) => {
      return card;
    });
    return items;
  });
  const feedData = totalData.flat();
  return { feedData };
};
