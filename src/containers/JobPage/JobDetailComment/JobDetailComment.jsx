import React from "react";

import { useMutation, useQueryClient } from "react-query";
import {
  GetComments,
  CommentSelector,
  postComment,
  deleteComments,
} from "@/api";

import { useRecoilValue } from "recoil";
import { auth } from "@/recoil";

import { Layout, BoxTitle, BoxDescription } from "./JobDetailComment.styled";
import { CommentInput, CommentList } from "@/components";

const JobDetailComment = ({ companyId, ...props }) => {
  const queryClient = useQueryClient();
  const user = useRecoilValue(auth);

  const { data } = GetComments({ type: "company", id: companyId });
  const { commentData } = CommentSelector(data);

  const CommentMutation = useMutation((data) => postComment(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("getComments");
    },
  });

  const commentDeleteMutation = useMutation((data) => deleteComments(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("getComments");
    },
  });

  const handleClick = (comment) => {
    CommentMutation.mutate({
      type: "company",
      companyId: companyId,
      content: comment.value,
    });
  };

  const dropdownItems = [
    {
      value: "delete",
      label: "삭제",
      onClick: (e) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          commentDeleteMutation.mutate({
            type: "company",
            id: e.target.id,
          });
        }
      },
    },
  ];

  return (
    <Layout>
      <BoxTitle {...props}>댓글</BoxTitle>
      <BoxDescription {...props}>
        이 기업에 대한 의견을 나눠보세요
      </BoxDescription>
      <CommentInput onClick={(comment) => handleClick(comment)} {...props} />
      <CommentList
        data={commentData}
        dropdownItems={dropdownItems}
        currentUser={user.userId}
        {...props}
      />
    </Layout>
  );
};

export default JobDetailComment;
