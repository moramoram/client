import React from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginState, createModalState, loginModalState } from "@/recoil";

import { Layout, Title, Content } from "./CommunityNoContent.styled";
import { Button } from "@/components";

const CommunityNoContent = ({ ...props }) => {
  const isLogined = useRecoilValue(isLoginState);

  const setCreateModalOpen = useSetRecoilState(createModalState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const handleCreation = () => {
    !isLogined && setLoginModalOpen("require");
    isLogined && setCreateModalOpen(true);
  };

  return (
    <Layout>
      <Title {...props}>검색 결과가 없어요 🥺</Title>
      <Content {...props}>게시글을 직접 작성해볼까요?</Content>
      <Button mode="active" onClick={handleCreation}>
        새 글 작성하기
      </Button>
    </Layout>
  );
};

export default CommunityNoContent;
