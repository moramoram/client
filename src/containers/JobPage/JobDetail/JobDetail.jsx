import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { GetJobDetail, JobDetailSelector, postComment } from "@/queries";

import { CardSmallGrid, CommentList, JobSideBar } from "@/containers";
import { Toc, CommentInput } from "@/components";
import { colors, fontSize, lineHeight, fontWeight, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobDetail = ({ cardData, commentData, ...props }) => {
  const queryClient = useQueryClient();
  const { data } = GetJobDetail();
  const { contentData, titleData, sidebarData } = JobDetailSelector(mockdata);

  const mutation = useMutation("postStudyDetailComment", postComment);

  const onPostComment = (comment) => {
    mutation.mutate(comment.value, {
      onSuccess: () => {
        queryClient.invalidateQueries("getStudyDetail");
        console.log(data.name);
      },
    });
  };

  const countAvailableStudy = cardData.filter(
    (data) => !data.isDisabled
  ).length;

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
            이 기업을 준비하는 {countAvailableStudy}
            개의 스터디가 열려있어요
          </BoxDescription>
          <CardSmallGrid data={cardData} {...props} />
        </CardBox>
        <div>
          <BoxTitle {...props}>댓글</BoxTitle>
          <BoxDescription {...props}>
            이 기업에 대해 의견을 나눠보세요
          </BoxDescription>
          <CommentInput
            {...props}
            onClick={(comment) => onPostComment(comment)}
          />
          <CommentList data={commentData} {...props} />
        </div>
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

const mockdata = {
  recruitId: 5,
  company: {
    companyId: 4,
    companyName: "삼성전자",
    logoImg:
      "https://ssafe-image.s3.ap-northeast-2.amazonaws.com/static/company/be478c55-58af-4229-bed7-b54cbb735f7dgo.PNG",
  },
  title: "삼성전자 백엔드 모집",
  recruitUrl: "www.samsung.co.kr",
  job: "백엔드 개발",
  empType: "정규직",
  career: "신입",
  location: "강남",
  techStack: "Spring,Jpa",
  openDate: "2022-01-23T05:00:00",
  closeDate: "2022-01-24T10:00:00",

  content: (
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
        <li>
          React 등을 활용한 3년 이상 혹은 그에 준하는 개발 능력을 보유한 분
        </li>
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
          경조금(휴가) 및 연차, 코로나 백신휴가, 건강검진/예비군 훈련 시
          공가휴가 제공(연차에서 차감 안됨), 조식제공
        </li>
        <li>워크샵, 책모임, 스터디</li>
      </ul>
    </>
  ),
  views: 5,
  scrapStatus: true,
  createdDate: "2022-02-01T18:41:31",
  modifiedDate: "2022-02-03T23:40:11.473",
  sbenefit: false,
};

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

  div {
    display: block;
    border-radius: 4px;
    animation: ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

const Highlight = styled.div`
  min-width: 70px;
  min-height: ${lineHeight.h4};

  font-size: ${fontSize.h4};
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

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
`;

const BoxDescription = styled.div`
  padding-bottom: 2rem;
  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
`;
