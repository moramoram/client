import React from "react";

import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { auth } from "@/recoil";

import { useMutation, useQueryClient } from "react-query";
import {
  GetComments,
  CommentSelector,
  postComment,
  deleteComments,
} from "@/api";

import { Title } from "./CommunityDetailComment.styled";
import { CommentInput, CommentList } from "@/components";

const CommunityDetailComment = ({ boardType, ...props }) => {
  const queryClient = useQueryClient();
  const id = useParams().contentId;
  const user = useRecoilValue(auth);

  const { data } = GetComments({ type: "board", boardType: boardType, id: id });
  const { commentData } = CommentSelector(data);

  const CommentCreateMutation = useMutation((data) => postComment(data), {
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
    CommentCreateMutation.mutate({
      type: "board",
      boardId: id,
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
            type: "board",
            id: e.target.id,
          });
        }
      },
    },
  ];

  return (
    <>
      <Title {...props}>댓글</Title>
      <CommentInput onClick={(comment) => handleClick(comment)} {...props} />
      <CommentList
        data={commentData}
        dropdownItems={dropdownItems}
        currentUser={user.userId}
        {...props}
      />
    </>
  );
};

export default CommunityDetailComment;
