import React from "react";
import { Layout, Title, Content } from "./JobNoContent.styled";

const JobNoContent = ({ ...props }) => {
  return (
    <Layout>
      <Title {...props}>검색 결과가 없어요 🥺</Title>
      <Content {...props}></Content>
    </Layout>
  );
};

export default JobNoContent;
