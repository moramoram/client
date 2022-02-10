import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { GetJobDetail, JobDetailSelector, postComment } from "@/api";

import { CardSmallSlider, CommentList } from "@/containers";
import {
  Badge,
  BookMark,
  Button,
  CommentInput,
  ImageBoxResponsive,
  SideBarItem,
  Toc,
} from "@/components";
import { Icon } from "@/foundations";
import { colors, fontSize, lineHeight, fontWeight, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobDetailMobile = ({ cardData, commentData, ...props }) => {
  const queryClient = useQueryClient();
  const { data } = GetJobDetail();
  const { contentData, titleData, sidebarData } = JobDetailSelector(mockdata);
  const [isMarked, setIsMarked] = useState(sidebarData.scrap);

  const mutation = useMutation("postStudyDetailComment", postComment);

  const onPostComment = (comment) => {
    mutation.mutate(comment.value, {
      onSuccess: () => {
        queryClient.invalidateQueries("getStudyDetail");
        console.log(data.name);
      },
    });
  };

  return (
    <>
      <Layout>
        <ImageBoxResponsive className="thumbnail" {...props} />
        <TitleBox {...props}>
          <Highlight {...props}>{titleData.highlight}</Highlight>
          <Title {...props}>{titleData.title}</Title>
          <SubTitle {...props}>{titleData.subtitle}</SubTitle>
          <SideBarBox>
            {summaryData.map(({ title, icon, id }) => (
              <SideBarItem
                className="contents-item"
                title={title}
                icon={icon}
                description={sidebarData[id]}
                key={id}
                {...props}
              />
            ))}
          </SideBarBox>
          <BadgeBox>
            {sidebarData.badges.map((children, idx) => {
              return (
                <Badge
                  className="badge-item"
                  key={idx}
                  mode="secondary"
                  color="gray100"
                  isBold
                  {...props}
                >
                  {children}
                </Badge>
              );
            })}
          </BadgeBox>
        </TitleBox>
        <Toc items={tocItem} {...props} />
        <Content {...props}>{contentData}</Content>
        <CardBox>
          <BoxTitle {...props}>스터디</BoxTitle>
          <BoxDescription {...props}>같이 준비해요</BoxDescription>
          <CardSmallSlider data={cardData} {...props} />
        </CardBox>
        <CommentBox>
          <BoxTitle {...props}>댓글</BoxTitle>
          <BoxDescription {...props}>
            이 기업에 대한 의견을 나눠보세요
          </BoxDescription>
          <CommentInput
            {...props}
            onClick={(comment) => onPostComment(comment)}
          />
          <CommentList data={commentData} {...props} />
        </CommentBox>
      </Layout>
      <FixedBox>
        <ButtonBg {...props} />
        <ButtonBox {...props}>
          <Button minWidth="380px">
            <Icon icon="edit" />
            지원하기
          </Button>
          <Button
            mode={isMarked ? "active" : "secondary"}
            minWidth="380px"
            onClick={() => setIsMarked(!isMarked)}
            {...props}
          >
            {isMarked ? (
              <>
                <BookMark mode="primary" /> 북마크 완료
              </>
            ) : (
              <>
                <Icon icon="bookmark" /> 북마크 하기
              </>
            )}
          </Button>
        </ButtonBox>
      </FixedBox>
    </>
  );
};

JobDetailMobile.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.object,
};

JobDetailMobile.defaultProps = {
  theme: THEME.LIGHT,
};

export default JobDetailMobile;

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

const summaryData = [
  {
    title: "직무",
    icon: "briefcase",
    id: "task",
  },
  {
    title: "고용 형태",
    icon: "building",
    id: "type",
  },
  {
    title: "경력",
    icon: "monitor",
    id: "career",
  },
  {
    title: "근무 위치",
    icon: "mapPin",
    id: "location",
  },
];

const bgColor = {
  light: colors.white,
  dark: colors.black,
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
  width: 100%;
  padding: 100px 12px 100px 12px;
  padding-top: 100px;

  overflow: hidden;
  margin: auto;
  max-width: 940px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    border-radius: 4px;
    animation: ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

const SideBarBox = styled.div`
  margin: 10px 0px;
`;

const BadgeBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 10px;
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

  font-size: calc(${fontSize.h2} - 2px);
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
  padding: 0 1rem 2rem 1rem;
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

const CommentBox = styled.div``;

const FixedBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;

  padding: 0px 12px 20px 12px;
  background: ${(props) => bgColor[props.theme]};

  > button {
    flex-grow: 1;
    padding: 0;
  }
`;

const ButtonBg = styled.div`
  width: 100%;
  height: 2rem;
  background-image: linear-gradient(
    to top,
    ${(props) => bgColor[props.theme]},
    ${colors.transparent}
  );
`;
