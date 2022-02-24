import React from "react";
import styled from "styled-components";

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

import { CommentInput, CommentList } from "@/components";
import { colors, fontSize, fontWeight } from "@/_shared";

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

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Title = styled.div`
  margin: 2rem 0;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;
