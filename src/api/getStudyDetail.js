import { useQuery } from "react-query";
import { axiosInstance, parseHtml } from "@/utils";

const fetchData = async (id) => {
  const res = await axiosInstance({
    url: `/studies/${id}`,
  });
  return res.data;
};

export const GetStudyDetail = (id) =>
  useQuery(["getStudyDetail", id], () => fetchData(id));

export const StudyDetailSelector = (data) => {
  const { parsedhtml } = parseHtml(data.content);

  const titleData = {
    title: data.title,
    subtitle: `${data.writerInfo.nickname} (${data.writerInfo.ordinal}기 / ${data.writerInfo.campus})`,
    src: data.writerInfo.profileImg,
    highlight: data.recruitment ? "모집중" : "모집완료",
  };
  const contentData = parsedhtml;
  const tocItem = [
    {
      name: "info",
      title: "공고",
      number: null,
    },

    {
      name: "comments",
      title: "댓글",
      number: null,
    },
  ];

  const onOff = {
    1: "온라인",
    2: "오프라인",
    3: "온/오프라인",
  };

  const sidebarData = {
    type: data.studyType,
    target: data.company_name,
    src: data?.thumbnailImg,
    people:
      data.memberNumber === "무관"
        ? data.memberNumber
        : `${data.memberNumber}명`,
    onOff: onOff[data.onOff],
    badges: data?.techStack?.split(","),
    scrap: data.scrapStatus,
  };
  return { contentData, titleData, tocItem, sidebarData };
};
