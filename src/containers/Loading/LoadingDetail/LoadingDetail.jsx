import React from "react";
import styled from "styled-components";

import { CommentList, StudySideBar } from "@/containers";
import { Avatar, Toc, CommentInput } from "@/components";
import { colors, fontSize, lineHeight, fontWeight, loadings } from "@/_shared";

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
          <div>
            <SubTitle {...props} isLoading>
              <Avatar size="medium" {...props} isLoading />
            </SubTitle>
          </div>
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

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const textColor = {
  light: colors.gray700,
  dark: colors.gray300,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const borderColor = {
  dark: colors.gray700,
  light: colors.gray200,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  flex-shrink: 0;

  margin-top: 160px;
  width: calc(100% - 500px);
  max-width: 940px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: block;
    border-radius: 4px;
  }
`;

const Highlight = styled.div`
  max-width: 200px;
  min-height: ${lineHeight.h4};

  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
  animation: ${(props) => props.isLoading && loadings[props.theme]};
`;

const Title = styled.div`
  max-width: 600px;
  min-height: ${lineHeight.h2};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
  animation: ${(props) => props.isLoading && loadings[props.theme]};
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 160px;
  min-height: ${lineHeight.h4};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h4};
  color: ${(props) => subtitleColor[props.theme]};
`;

const Content = styled.div`
  min-height: 300px;
  padding: 0 0 2rem 0;
  color: ${(props) => textColor[props.theme]};

  h3 {
    margin-bottom: 0;
  }

  ul {
    padding-left: 32px;
  }
`;

const BoxTitle = styled.div`
  padding: 4rem 0 0.2rem 0;
  min-height: ${lineHeight.h3};

  border-top: 1px solid ${(props) => borderColor[props.theme]};
  color: ${(props) => titleColor[props.theme]};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
`;

const BoxDescription = styled.div`
  padding-bottom: 2rem;
  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
`;
