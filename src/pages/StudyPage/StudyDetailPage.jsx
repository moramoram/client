import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { useMediaQuery } from "react-responsive";

import { LoadingDetail, LoadingDetailMobile } from "@/containers/Loading";
import { StudyDetail, StudyDetailMobile } from "@/containers/StudyPage";

const StudyDetailPage = () => {
  const theme = useRecoilValue(themeState);

  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <Layout>
      {isPc && (
        <Suspense fallback={<LoadingDetail theme={theme} />}>
          <StudyDetail theme={theme} />
        </Suspense>
      )}
      {isMobile && (
        <Suspense fallback={<LoadingDetailMobile theme={theme} />}>
          <StudyDetailMobile theme={theme} />
        </Suspense>
      )}
    </Layout>
  );
};

export default StudyDetailPage;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 1280px;
  margin: auto;
`;
