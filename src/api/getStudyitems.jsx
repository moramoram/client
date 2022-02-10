import { axiosInstance } from "@/utils";
import { useInfiniteQuery } from "react-query";

const param = {
  title: "",
  techStack: ["Jpa", "Vue"],
  job: "프론트엔드",
  criteria: "date",
  offset: 1,
};

const fetchPage = async (type, pageParam) => {
  const res = await axiosInstance({
    url: `/boards/types/${type}?offset=${pageParam}`,
    param,
  });
  return { res: res.data, nextPage: pageParam + 1 };
};

export const GetStudyitems = () =>
  useInfiniteQuery(
    "getStudyitems",
    ({ pageParam = 1 }) => fetchPage(pageParam),
    {
      getNextPageParam: (prevPage) => {
        return !!prevPage.res.length ? prevPage.nextPage : undefined;
      },
    }
  );

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
