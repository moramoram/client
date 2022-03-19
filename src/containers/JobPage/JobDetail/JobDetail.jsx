import React from "react";
import PropTypes from "prop-types";

import {
  GetJobDetail,
  JobDetailSelector,
  GetCompanyStudyList,
  StudyCardSmallSelector,
} from "@/api";
import { useParams } from "react-router-dom";

import {
  Layout,
  TitleBox,
  Highlight,
  Title,
  SubTitle,
  Content,
  CardBox,
  BoxTitle,
  BoxDescription,
} from "./JobDetail.styled";
import { JobSideBar, JobDetailComment } from "@/containers/JobPage";
import { Toc, CardSmallSlider } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobDetail = ({ commentData, ...props }) => {
  const id = useParams().jobId;
  const { data } = GetJobDetail(id);
  const { contentData, titleData, sidebarData, companyData } =
    JobDetailSelector(data);
  const recruitState = titleData.highlight === "모집중";

  const studyCardData = GetCompanyStudyList(companyData.companyName);
  const { smallCardData } = StudyCardSmallSelector(studyCardData);
  const countAvailableStudy = !!smallCardData
    ? smallCardData.filter((data) => !data.isDisabled).length
    : 0;

  return (
    <>
      <Layout>
        <TitleBox {...props}>
          <Highlight status={recruitState} {...props}>
            {titleData.highlight}
          </Highlight>
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
          <CardSmallSlider
            data={smallCardData}
            createMsg="스터디 만들기"
            companyData={companyData}
            {...props}
          />
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
