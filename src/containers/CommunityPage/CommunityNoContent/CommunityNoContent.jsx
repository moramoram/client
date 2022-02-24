import React from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  authState,
  createModalState,
  modalState,
  smallModalState,
  loginModalState,
} from "@/recoil";

import { Button } from "@/components";
import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const CommunityNoContent = ({ ...props }) => {
  const authorizedState = useRecoilValue(authState);

  const setCreateModalOpen = useSetRecoilState(createModalState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const setModalOpen = useSetRecoilState(modalState);
  const setSmallModalState = useSetRecoilState(smallModalState);
  const handleCreation = () => {
    !authorizedState && setLoginModalOpen("require");
    authorizedState === 3 && setCreateModalOpen(true);
    authorizedState === 2 && setModalOpen(true);
    authorizedState === 1 && setSmallModalState(true);
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

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const contentColor = {
  dark: colors.gray400,
  light: colors.gray600,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 4rem 0;
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
