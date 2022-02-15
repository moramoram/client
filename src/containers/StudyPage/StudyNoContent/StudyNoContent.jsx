import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Button } from "@/components";
import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const StudyNoContent = ({ ...props }) => {
  return (
    <Layout>
      <Title {...props}>검색 결과가 없어요 🥺</Title>
      <Content {...props}>스터디를 직접 개설해볼까요?</Content>
      <ButtonLink to="/study/create">
        <Button mode="active">스터디 개설하기</Button>
      </ButtonLink>
    </Layout>
  );
};

export default StudyNoContent;

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const contentColor = {
  dark: colors.gray300,
  light: colors.gray700,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  max-width: 940px;
  width: 100%;
  padding: 2rem 0 2rem 0;
`;

const Title = styled.div`
  font-size: ${fontSize.h4};
  line-height: ${lineHeight.h4};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.lg};
  }
`;

const Content = styled.div`
  display: -webkit-box;
  overflow: hidden;
  height: 3rem;

  color: ${(props) => contentColor[props.theme]};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
  text-overflow: ellipsis;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;
