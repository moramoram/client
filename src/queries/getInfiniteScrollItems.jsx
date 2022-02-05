import {
  axiosInstance,
  daysFromToday,
  daysLeftFromToday,
  numToMillion,
} from "@/utils";
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

export const StudyCardSelector = (data) => {
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

export const CommunityFeedSelector = (data) => {
  const feedData = data.map((card) => {
    return {
      username: card.writerInfo.nickname,
      avatar: null,
      campus: card.writerInfo.campus,
      ordinal: card.writerInfo.ordinal,
      created: daysFromToday(card.createdDate),
      title: card.title,
      content: card.content,
      thumbnail:
        "https://w.namu.la/s/e8a1981b6f848717dc05daeff3db84ad42bf24bcd02671d9e743d22b4d1fd28ebf66def6a7c341e158e961c4b826db435d30d994056f5a4095b789d168f8254bc908459c951c9fc48b94b21f5588baed",
      likecount: numToMillion(card.totalLike),
      commentcount: numToMillion(card.totalComment),
      viewcount: numToMillion(card.views),
      id: card.boardId,
    };
  });

  return { feedData };
};
