import React from "react";
import styled from "styled-components";

import { AuthHeader, AuthBody } from "@/containers";

const Authorization = ({ ...props }) => {
  return (
    <Layout>
      <AuthHeader />
      <AuthBody />
    </Layout>
  );
};

export default Authorization;

const Layout = styled.div`
  display: flex;
  width: 23vw;

  flex-direction: column;
  flex-wrap: wrap;
`;
