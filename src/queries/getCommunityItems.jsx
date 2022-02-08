import { axiosInstance, daysFromToday, numToMillion } from "@/utils";
import { useInfiniteQuery } from "react-query";

const fetchPage = async (type, pageParam) => {
  const res = await axiosInstance({
    url: `/boards/types/${type}?offset=${pageParam}`,
  });
  return { res: res.data, nextPage: pageParam + 1 };
};

export const GetCommunityList = (type) =>
  useInfiniteQuery(
    ["getCommunityList", type],
    ({ pageParam = 1 }) => fetchPage(type, pageParam),
    {
      getNextPageParam: (prevPage) =>
        !!prevPage.res ? undefined : prevPage.nextPage,
    }
  );

export const CommunityFeedSelector = (data) => {
  const feedData = data.map((card) => {
    return {
      username: card.writerInfo.nickname,
      avatar: null,
      campus: card.writerInfo.campus,
      ordinal: card.writerInfo.ordinal,
      created: daysFromToday(card.createdDate),
      title: card.title,
      // content: card.content.replace(/(<([^>]+)>)/gi, ""),
      content: card.content,
      thumbnail: card.thumbnail,
      likecount: numToMillion(card.totalLike),
      commentcount: numToMillion(card.totalComment),
      viewcount: numToMillion(card.views),
      id: card.boardId,
    };
  });

  return { feedData };
};
