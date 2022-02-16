import React from "react";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { GetComments, CommentSelector, postComment } from "@/api";

import { CommentInput } from "@/components";
import { CommentList } from "@/layouts";
import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const JobDetailComment = ({ companyId, ...props }) => {
  const queryClient = useQueryClient();
  const { data } = GetComments({ type: "company", id: companyId });
  const { commentData } = CommentSelector(data);

  const CommentMutation = useMutation((data) => postComment(data), {
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

  return (
    <Layout>
      <BoxTitle {...props}>댓글</BoxTitle>
      <BoxDescription {...props}>
        이 기업에 대한 의견을 나눠보세요
      </BoxDescription>
      <CommentInput onClick={(comment) => handleClick(comment)} {...props} />
      <CommentList data={commentData} {...props} />
    </Layout>
  );
};

export default JobDetailComment;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const borderColor = {
  dark: colors.gray700,
  light: colors.gray200,
};

const Layout = styled.div``;

const BoxTitle = styled.div`
  padding: 4rem 0 0.2rem 0;
  min-height: ${lineHeight.h3};

  border-top: 1px solid ${(props) => borderColor[props.theme]};
  color: ${(props) => titleColor[props.theme]};

  font-size: ${fontSize.h3};
  line-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
`;

const BoxDescription = styled.div`
  padding-bottom: 2rem;
  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
`;
