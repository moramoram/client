import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import {
  StudyCreateIntro,
  StudyCreateSummary,
  StudyCreateDetail,
} from "@/containers";
import { Button } from "@/components";

const StudyCreatePage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <>
      <StudyCreateIntro theme={theme} />
      <Layout>
        <ContentBox>
          <StudyCreateDetail theme={theme} />
          <StudyCreateSummary theme={theme} />
          <ButtonBox>
            <Button mode="secondary" theme={theme}>
              취소
            </Button>
            <Button mode="primary" theme={theme}>
              완료
            </Button>
          </ButtonBox>
        </ContentBox>
      </Layout>
    </>
  );
};

export default StudyCreatePage;

const Layout = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const ContentBox = styled.div`
  padding: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
`;
