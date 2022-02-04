import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { CommunityDetail } from "@/containers";

const CommunityDetailPage = ({ match }) => {
  const theme = useRecoilValue(themeState);
  return (
    <Layout>
      <CommunityDetail theme={theme} />
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
