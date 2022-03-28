import React, { useState } from "react";
import PropTypes from "prop-types";

import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import {
  GetJobDetail,
  JobDetailSelector,
  putJobScrap,
  GetCompanyStudyList,
  StudyCardSmallSelector,
} from "@/api";

import {
  Layout,
  TitleBox,
  SideBarBox,
  BadgeBox,
  Highlight,
  Title,
  SubTitle,
  Content,
  CardBox,
  BoxTitle,
  BoxDescription,
  FixedBox,
  ButtonBox,
  ButtonBg,
} from "./JobDetailMobile.styled";
import { JobDetailComment } from "@/containers/JobPage";
import {
  Badge,
  BookMark,
  Button,
  CardSmallSlider,
  ImageBoxResponsive,
  SideBarItem,
  Toc,
} from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobDetailMobile = (props) => {
  const id = useParams().jobId;
  const { data } = GetJobDetail(id);
  const { contentData, titleData, sidebarData, companyData } =
    JobDetailSelector(data);

  const studyCardData = GetCompanyStudyList(companyData.companyName);
  const { smallCardData } = StudyCardSmallSelector(studyCardData);

  const [isMarked, setIsMarked] = useState(sidebarData.scrap);
  const putScrapMutation = useMutation(putJobScrap);

  const onScrap = () => {
    setIsMarked(!isMarked);
    putScrapMutation.mutate(id);
  };

  return (
    <>
      <Layout>
        <ImageBoxResponsive className="thumbnail" src={sidebarData.src} />
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
          <CardSmallSlider
            data={smallCardData}
            createMsg="스터디 만들기"
            companyData={companyData}
            {...props}
          />
        </CardBox>
        <JobDetailComment companyId={companyData.companyId} {...props} />
      </Layout>
      <FixedBox>
        <ButtonBg {...props} />
        <ButtonBox {...props}>
          <Button
            minWidth="380px"
            onClick={() => window.open(`https://${sidebarData.url}`, "_blank")}
          >
            <Icon icon="edit" />
            지원하기
          </Button>
          <Button
            mode={isMarked ? "active" : "secondary"}
            minWidth="380px"
            onClick={onScrap}
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
