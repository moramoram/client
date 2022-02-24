import { useQuery } from "react-query";
import { axiosInstance, daysLeftFromToday, parseHtml } from "@/utils";

export const GetJobDetail = (id) =>
  useQuery(["getJobDetail", id], () => fetchData(id));

const fetchData = async (id) => {
  const res = await axiosInstance({
    url: `/recruits/${id}`,
  });
  return res.data;
};

export const JobDetailSelector = (data) => {
  const { parsedhtml } = parseHtml(data.content);
  const titleData = {
    title: data.title,
    subtitle: data.company.companyName,
    highlight: daysLeftFromToday(data.closeDate) ? "모집중" : "모집마감",
  };
  const contentData = parsedhtml;

  const sidebarData = {
    task: data.job,
    type: data.empType,
    career: data.career,
    location: data.location,
    badges: data.techStack.split(",").filter((data) => data),
    scrap: data.scrapStatus,
    url: data.recruitUrl,
    src: data.company.logoImg,
  };
  const companyData = data.company;
  return { contentData, titleData, sidebarData, companyData };
};
