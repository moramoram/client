import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { Button } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const NotFoundPage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Layout>
      <Title theme={theme}>
        알 수 없는 에러가 발생했어요.
        <br /> 아래 새로고침 버튼을 눌러주세요.
      </Title>
      <Button
        onClick={() => {
          window.location.reload();
        }}
      >
        새로고침
      </Button>
    </Layout>
  );
};

export default NotFoundPage;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > svg {
    width: 100%;
  }
`;

const Title = styled.div`
  padding: 2rem 0 6rem 0;

  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
  text-align: center;

  transition: 0.3s;

  @media screen and (max-width: 530px) {
    padding: 0rem 0 4rem 0;
    line-height: ${lineHeight.h4};
    font-size: ${fontSize.h4};
  }
`;
