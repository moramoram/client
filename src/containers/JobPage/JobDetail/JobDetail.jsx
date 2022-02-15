import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  GetJobDetail,
  JobDetailSelector,
  GetCompanyStudyList,
  StudyCardSmallSelector,
} from "@/api";
import { useParams } from "react-router-dom";

import { JobSideBar, JobDetailComment } from "@/containers";
import { CardSmallSlider } from "@/layouts";
import { Toc } from "@/components";
import { colors, fontSize, fontWeight, lineHeight, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobDetail = ({ commentData, ...props }) => {
  const id = useParams().jobId;
  const { data } = GetJobDetail(id);
  const { contentData, titleData, sidebarData, companyData } =
    JobDetailSelector(data);

  const studyCardData = GetCompanyStudyList(companyData.companyName);
  const { smallCardData } = StudyCardSmallSelector(studyCardData);
  const countAvailableStudy = !!smallCardData
    ? smallCardData.filter((data) => !data.isDisabled).length
    : 0;

  console.log(smallCardData);
  return (
    <>
      <Layout>
        <TitleBox {...props}>
          <Highlight {...props}>{titleData.highlight}</Highlight>
          <Title {...props}>{titleData.title}</Title>
          <SubTitle {...props}>{titleData.subtitle}</SubTitle>
        </TitleBox>
        <Toc items={tocItem} {...props} />
        <Content {...props}>{contentData}</Content>
        <CardBox>
          <BoxTitle {...props}>스터디</BoxTitle>
          <BoxDescription {...props}>
            이 기업을 준비하는 {countAvailableStudy}개의 스터디가 열려있어요
          </BoxDescription>
          {!!smallCardData && (
            <CardSmallSlider data={smallCardData} {...props} />
          )}
        </CardBox>
        <JobDetailComment companyId={companyData.companyId} {...props} />
      </Layout>
      <JobSideBar {...props} data={sidebarData} />
    </>
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

const tocItem = [
  {
    name: "info",
    title: "공고",
    number: null,
  },
  {
    name: "study",
    title: "스터디",
    number: null,
  },
  {
    name: "comments",
    title: "댓글",
    number: null,
  },
];

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
  gap: 4rem;

  flex-shrink: 0;

  margin-top: 170px;
  width: calc(100% - 500px);
  max-width: 940px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: block;
    border-radius: 4px;
    animation: ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

const Highlight = styled.div`
  min-width: 70px;
  min-height: ${lineHeight.lg};

  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
`;

const Title = styled.div`
  min-width: 160px;
  min-height: ${lineHeight.h2};

  font-size: ${fontSize.h2};
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  min-width: 160px;
  min-height: ${lineHeight.lg};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  color: ${(props) => subtitleColor[props.theme]};
`;

const Content = styled.div`
  padding: 0 0 2rem 0;
  color: ${(props) => textColor[props.theme]};

  h3 {
    margin-bottom: 0;
  }

  ul {
    padding-left: 32px;
  }
`;

const CardBox = styled.div``;

const BoxTitle = styled.div`
  padding: 4rem 0 0.2rem 0;
  min-height: ${lineHeight.h3};

  border-top: 1px solid ${(props) => borderColor[props.theme]};
  color: ${(props) => titleColor[props.theme]};

  font-size: ${fontSize.h3};
  line-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
`;

const BoxDescription = styled.div`
  padding-bottom: 2rem;
  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
`;
