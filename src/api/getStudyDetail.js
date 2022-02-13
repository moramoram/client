import { useQuery } from "react-query";
import { axiosInstance, parseHtml } from "@/utils";

const fetchData = async (id) => {
  console.log(id);
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
    subtitle: `${data.writerInfo.nickname} (${data.writerInfo.ordinal}기/${data.writerInfo.campus})`,
    src: data.thumbnailImg,
    highlight: data.on_off === 1 ? "모집중" : "모집완료",
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
  const sidebarData = {
    type: data.study_type,
    target: !!data.company_name ? data.company_name : "-",
    people:
      data.memberNumber === "무관"
        ? data.memberNumber
        : `${data.memberNumber}명`,
    location: data.location,
    badges: [data.techStack.split(",")],
    scrap: data.scrapStatus,
  };
  return { contentData, titleData, tocItem, sidebarData };
};
