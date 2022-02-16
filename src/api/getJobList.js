import { axiosInstance, daysLeftFromToday } from "@/utils";
import { useInfiniteQuery } from "react-query";

const URL = {
  1: "/recruits/search",
  2: "/recruits/close-date",
  4: "/recruits/scraps/users",
};

const fetchPage = async (data, pageParam) => {
  const tech = data.techStack.map((tech) => {
    return tech.value;
  });
  const param = {
    ...data,
    techStack: tech.join(),
    offset: pageParam,
  };
  const res = await axiosInstance({
    url: URL[data.category],
    params: param,
  });
  return { res: res.data, nextPage: pageParam + 1 };
};

export const GetJobList = (data) =>
  useInfiniteQuery(
    ["getJobList", data],
    ({ pageParam = 1 }) => fetchPage(data, pageParam),
    {
      getNextPageParam: (prevPage) => {
        return !!prevPage.res.length ? prevPage.nextPage : undefined;
      },
    }
  );

export const JobCardSelector = (data) => {
  const totalData = data.pages.map((page) => {
    const items = page.res.map((card) => {
      const dday = daysLeftFromToday(card.closeDate);

      const badgeData = [
        card.job,
        card.sbenefit ? "SSAFY우대" : "",
        ...card?.techStack?.split(",").slice(0, 2),
      ].filter((data) => data);

      return {
        contents: {
          title: card.title,
          subtitle: card.company.companyName,
          highlight: dday ? dday : "모집마감",
          src: card.company.logoImg,
        },
        badges: badgeData,
        id: `/job/${card.recruitId}`,
        isDisabled: !dday,
      };
    });
    return items;
  });
  const cardData = totalData.flat();
  return { cardData };
};
