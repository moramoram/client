import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, lineHeight, fontWeight, loadings } from "@/_shared";

import { Avatar, Toc, CommentInput } from "@/components";
import { CommentList } from "@/containers";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyDetail = ({ titleData, commentData, ...props }) => {
  return (
    <Layout>
      <TitleBox {...props}>
        <Highlight {...props}>{titleData.highlight}</Highlight>
        <Title {...props}>{titleData.title}</Title>
        <SubTitle {...props}>
          <Avatar size="medium" src={titleData.src} {...props} />
          {titleData.subtitle}
        </SubTitle>
      </TitleBox>
      <Toc items={tocItem} />
      <Content />
      <CommentBox>
        <BoxTitle>댓글</BoxTitle>
        <CommentInput />
        <CommentList data={commentData} />
      </CommentBox>
    </Layout>
  );
};

StudyDetail.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

StudyDetail.defaultProps = {
  theme: THEME.LIGHT,
};

export default StudyDetail;

const tocItem = [
  {
    name: "info",
    title: "공고",
    number: null,
  },

  {
    name: "comments",
    title: "댓글",
    number: 20,
  },
];

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
  > div {
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
  min-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h4};
  color: ${(props) => subtitleColor[props.theme]};
  div {
    display: inline-block;
    margin-right: 10px;
  }
`;

const Content = styled.div`
  min-height: 600px;
`;

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
