import { useQuery } from "react-query";
import { axiosInstance } from "@/utils";

export const GetCompanyStudyList = (companyName) =>
  useQuery(["getCompanyStudyList", companyName], () => fetchData(companyName), {
    suspense: false,
  });

const fetchData = async (companyName) => {
  const res = await axiosInstance({
    url: `/studies/company-names?companyName=${companyName}`,
  });
  return res.data;
};

export const StudyCardSmallSelector = (data) => {
  console.log(data);
  const onOff = {
    0: "온라인",
    1: "오프라인",
    2: "온/오프라인",
  };
  const smallCardData = data?.data?.map((card) => {
    console.log(card);

    const badgeData = [
      card.studyType,
      onOff[card.onOff],
      card?.techStack?.split(",")[0],
    ].filter((data) => data);

    return {
      contents: {
        title: card.title,
        subtitle: `${card.writerInfo.nickname} (${card.writerInfo.ordinal}기 / ${card.writerInfo.campus})`,
        highlight: card.recruitment ? "모집중" : "모집완료",
        src: "",
      },
      badges: badgeData,
      id: `/study/${card.studyId}`,
      isDisabled: !card.recruitment,
    };
  });
  return { smallCardData };
};
