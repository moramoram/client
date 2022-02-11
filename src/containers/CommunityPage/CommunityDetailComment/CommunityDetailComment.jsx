import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { CommunityCommentSelector, postComment } from "@/api";

import { CommentInput } from "@/components";
import { CommentList } from "@/layouts";
import { colors, fontSize, fontWeight } from "@/_shared";

const CommunityDetailComment = ({ data, ...props }) => {
  const queryClient = useQueryClient();
  const id = useParams().contentId;
  const { commentData } = CommunityCommentSelector(data);
  const CommentMutation = useMutation((data) => postComment(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("getCommunityComments");
    },
  });

  const handleClick = (comment) => {
    CommentMutation.mutate({
      type: "board",
      boardId: id,
      content: comment.value,
    });
  };

  return (
    <>
      <Title {...props}>댓글</Title>
      <CommentInput onClick={(comment) => handleClick(comment)} {...props} />
      <CommentList data={commentData} {...props} />
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
