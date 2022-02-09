import axios from "axios";
import { useQuery } from "react-query";
import { daysLeftFromToday } from "@/utils";

export const GetJobDetail = () => useQuery(["getStudyDetail"], fetchData);

const fetchData = async () => {
  console.log("API");
  const res = await axios.get("http://swapi.dev/api/people/1/");
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
