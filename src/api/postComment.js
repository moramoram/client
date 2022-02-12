import { axiosInstance } from "@/utils";

const commentType = {
  company: "company-comments",
  study: "study-comments",
  board: "board-comments",
};

export const postComment = async (data) => {
  console.log(data);
  const res = await axiosInstance({
    url: `/${commentType[data.type]}`,
    method: "post",
    data,
  });
  return res.data;
};
