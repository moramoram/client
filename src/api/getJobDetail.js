import { useQuery } from "react-query";
import { axiosInstance, daysLeftFromToday } from "@/utils";

export const GetJobDetail = (id) =>
  useQuery(["getJobDetail", id], () => fetchData(id));

const fetchData = async (id) => {
  const res = await axiosInstance({
    url: `/recruits/${id} `,
  });
  return res.data;
};

export const JobDetailSelector = (data) => {
  const titleData = {
    title: data.title,
    subtitle: data.company.companyName,
    src: data.logoImg,
    highlight: daysLeftFromToday(data.closeData) ? "모집중" : "모집완료",
  };
  const contentData = data.content;

  const sidebarData = {
    type: data.job,
    target: data.empType,
    people: data.career,
    location: data.location,
    badges: [data.techStack.split(",")],
    scrap: data.scrapStatus,
  };
  const companyData = data.company;
  return { contentData, titleData, sidebarData, companyData };
};
