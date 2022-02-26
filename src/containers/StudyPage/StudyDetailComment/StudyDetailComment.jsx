import React from "react";

import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState, auth } from "@/recoil";

import { useMutation, useQueryClient } from "react-query";
import {
  GetComments,
  CommentSelector,
  postComment,
  deleteComments,
} from "@/api";

import {
  BoxTitle,
  BoxDescription,
  CommentBox,
} from "./StudyDetailComment.styled";
import { CommentList, CommentInput } from "@/components";

const StudyDetailComment = () => {
  const theme = useRecoilValue(themeState);
  const user = useRecoilValue(auth);
  const id = useParams().studyId;

  const queryClient = useQueryClient();
  const { data } = GetComments({ type: "study", id: id });
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
      type: "study",
      studyId: id,
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
            type: "study",
            id: e.target.id,
          });
        }
      },
    },
  ];

  return (
    <CommentBox>
      <BoxTitle theme={theme}>댓글</BoxTitle>
      <BoxDescription theme={theme}>
        총 {commentData.length}개의 댓글이 달렸습니다.
      </BoxDescription>
      <CommentInput theme={theme} onClick={(comment) => handleClick(comment)} />
      <CommentList
        data={commentData}
        dropdownItems={dropdownItems}
        currentUser={user.userId}
        theme={theme}
      />
    </CommentBox>
  );
};

export default StudyDetailComment;
