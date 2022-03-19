import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { LoadingCommunityDetail } from "@/containers/Loading";
import { CommunityDetail } from "@/containers/CommunityPage";

const CommunityDetailPage = ({ match }) => {
  const theme = useRecoilValue(themeState);
  return (
    <Layout>
      <Suspense fallback={<LoadingCommunityDetail theme={theme} />}>
        <CommunityDetail theme={theme} />
      </Suspense>
    </Layout>
  );
};

export default CommunityDetailPage;

const Layout = styled.div`
  max-width: 940px;
  padding: 160px 20px 20px 20px;
  margin: auto;

  @media screen and (max-width: 530px) {
    padding: 120px 20px 20px 20px;
  }
`;
