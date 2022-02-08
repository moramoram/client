import { axiosInstance } from "@/utils";

const commentType = {
  company: "company-comments",
  study: "study-comments",
  board: "board-comments",
};

// export const PostComment = () =>
//   useMutation("postComment", {
//     onMutate: (variables) => {
//       console.log(`fetch`, variables);
//     },
//     onError: (error, variables, context) => {
//       console.log(`rolling back optimistic update with id ${context.id}`);
//     },
//     onSuccess: (data, variables, context) => {
//       console.log("success");
//     },
//   });

export const postComment = async (data) => {
  console.log(data);
  const res = await axiosInstance({
    url: `/${commentType[data.type]}`,
    method: "post",
    data: {
      boardId: data.boardId,
      content: data.content,
    },
  });
  return res.data;
};
