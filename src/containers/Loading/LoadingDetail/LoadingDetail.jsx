import React from "react";

import {
  Layout,
  TitleBox,
  Highlight,
  Title,
  SubTitle,
  Content,
  BoxTitle,
  BoxDescription,
} from "./LoadingDetail.styled";
import { StudySideBar } from "@/containers";
import { CommentInput, CommentList, Toc } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const LoadingDetail = ({ ...props }) => {
  return (
    <>
      <Layout>
        <TitleBox {...props} isLoading>
          <Highlight {...props} isLoading></Highlight>
          <Title {...props} isLoading></Title>
          <SubTitle {...props} isLoading></SubTitle>
        </TitleBox>
        <Toc items={tocItem} {...props} isLoading />
        <Content {...props} isLoading></Content>
        <div>
          <BoxTitle {...props} isLoading></BoxTitle>
          <BoxDescription {...props} isLoading></BoxDescription>
          <CommentInput {...props} isLoading />
          <CommentList {...props} isLoading />
        </div>
      </Layout>
      <StudySideBar {...props} isLoading />
    </>
  );
};

LoadingDetail.defaultProps = {
  theme: THEME.LIGHT,
};

export default LoadingDetail;

const tocItem = new Array(2).fill({
  name: "",
  title: "",
  number: null,
});
