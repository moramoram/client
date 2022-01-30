import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Toc, CommentInput } from "@/components";
import { CardSmallGrid, CommentList } from "@/containers";
import { colors, fontSize, lineHeight, fontWeight, loadings } from "@/_shared";

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
      <Toc {...props} />
      <Content {...props}>{contentData}</Content>
      <CardBox>
        <BoxTitle>스터디</BoxTitle>
        <CardSmallGrid data={cardData} {...props} />
      </CardBox>
      <CommentBox>
        <BoxTitle>이 기업에 대한 의견을 나누세요</BoxTitle>
        <CommentInput {...props} />
        <CommentList data={commentData} {...props} />
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

const contentData = (
  <>
    <h3>주요업무</h3>
    <ul>
      <li>React를 활용한 서비스 개발</li>
    </ul>
    <p>
      <br />
    </p>
    <h3>자격요건</h3>
    <ul>
      <li>학력: 초대졸 이상</li>
      <li>경력: 3년 이상</li>
      <li>React 등을 활용한 3년 이상 혹은 그에 준하는 개발 능력을 보유한 분</li>
    </ul>
    <p>
      <br />
    </p>
    <h3>우대사항</h3>
    <ul>
      <li>React 등을 활용한 서비스 개발 및 배포 경험 보유한 분</li>
      <li>HTML, CSS, JavaScript에 대한 이해도 보유한 분</li>
      <li>다양한 문제에 대해 체계적인 원인 분석 및 해결 능력을 보유</li>
    </ul>
    <p>
      <br />
    </p>
    <h3>혜택 및 복지</h3>
    <ul>
      <li>수평적인 사내문화와 자유로운 분위기</li>
      <li>자율 복장, 유연근무제</li>
      <li>
        경조금(휴가) 및 연차, 코로나 백신휴가, 건강검진/예비군 훈련 시 공가휴가
        제공(연차에서 차감 안됨), 조식제공
      </li>
      <li>워크샵, 책모임, 스터디</li>
    </ul>
  </>
);

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
  /* flex-wrap: wrap; */
  /* overflow: hidden; */

  width: 100%;
  max-width: 940px;

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

  h3 {
    margin-bottom: 0;
  }

  ul {
    padding-left: 32px;
  }
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
