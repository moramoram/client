import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, lineHeight, fontWeight, loadings } from "@/_shared";

import { Toc, CommentInput } from "@/components";
import { CardSmallGrid, CommentList } from "@/containers";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobDetail = ({ theme, titleData, cardData, commentData, ...props }) => {
  return (
    <Layout>
      <TitleBox theme={theme}>
        <Highlight theme={theme}>{titleData.highlight}</Highlight>
        <Title theme={theme}>{titleData.title}</Title>
        <SubTitle theme={theme}>{titleData.subtitle}</SubTitle>
      </TitleBox>
      <Toc theme={theme} />
      <Content />
      <CardBox>
        <BoxTitle theme={theme}>스터디</BoxTitle>
        <CardSmallGrid data={cardData} theme={theme} />
      </CardBox>
      <CommentBox>
        <BoxTitle>이 기업에 대한 의견을 나누세요</BoxTitle>
        <CommentInput theme={theme} />
        <CommentList data={commentData} theme={theme} />
      </CommentBox>
    </Layout>
  );
};

JobDetail.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

JobDetail.defaultProps = {
  theme: THEME.LIGHT,
};

export default JobDetail;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;

  width: 740px;

  > div {
    margin: 30px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: block;
    border-radius: 4px;
    margin: 10px;
    animation: ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

const Highlight = styled.div`
  min-width: 70px;
  min-height: ${lineHeight.h3};
  margin: 8px 0px;

  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
`;

const Title = styled.div`
  min-width: 160px;
  min-height: ${lineHeight.h2};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  min-width: 160px;
  min-height: ${lineHeight.h4};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h4};
  color: ${(props) => subtitleColor[props.theme]};
`;

const Content = styled.div`
  min-height: 600px;
`;

const CardBox = styled.div``;
const BoxTitle = styled.div`
  min-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
`;

const CommentBox = styled.div`
  > div {
    margin: 30px 0px;
  }
`;
