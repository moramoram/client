import React from "react";

import { Layout, Title, Content, ButtonLink } from "./StudyNoContent.styled";
import { Button } from "@/components";

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
