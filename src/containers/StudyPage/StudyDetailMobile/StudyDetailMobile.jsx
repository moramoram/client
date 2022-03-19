import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useRecoilValue } from "recoil";
import { auth } from "@/recoil";

import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {
  GetStudyDetail,
  StudyDetailSelector,
  putStudyScrap,
  PutStudyRecruits,
  DeleteStudy,
} from "@/api";

import {
  Layout,
  Header,
  TitleBox,
  SideBarBox,
  BadgeBox,
  Highlight,
  Title,
  SubTitle,
  DropdownBox,
  Dropdown,
  Content,
  FixedBox,
  ButtonBox,
  ButtonBg,
} from "./StudyDetailMobile.styled";
import { StudyDetailComment } from "@/containers/StudyPage";
import {
  Avatar,
  Badge,
  BookMark,
  Button,
  ImageBoxResponsive,
  SideBarItem,
  Toc,
} from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyDetailMobile = ({ ...props }) => {
  const id = useParams().studyId;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useRecoilValue(auth);

  const { data } = GetStudyDetail(id);
  const { titleData, contentData, tocItem, sidebarData } =
    StudyDetailSelector(data);

  const [isMarked, setIsMarked] = useState(sidebarData.scrap);
  const putScrapMutation = useMutation(putStudyScrap);
  const [recruitState, setRecruitState] = useState(null);

  useEffect(() => {
    setRecruitState(data.recruitment);
  }, [data.recruitment]);

  const onScrap = () => {
    setIsMarked(!isMarked);
    putScrapMutation.mutate(id);
  };

  const deleteStudyMutation = useMutation(DeleteStudy, {
    onMutate: async (id) => {
      queryClient.removeQueries("getStudyDetail", id);
      navigate("/study");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getStudyList");
    },
  });

  const putStudyRecruitsMutation = useMutation(PutStudyRecruits, {
    onSuccess: (id) => {
      queryClient.invalidateQueries("getStudyDetail", id);
      setRecruitState(!recruitState);
    },
  });

  const confirmMsg = {
    true: "스터디원 모집을 끝낼까요?",
    false: "스터디원을 다시 모집할까요?",
  };

  const dropdownItems = [
    {
      value: "recruitment",
      label: recruitState ? "모집 완료하기" : "다시 모집하기",
      onClick: () => {
        if (window.confirm(confirmMsg[recruitState])) {
          putStudyRecruitsMutation.mutate(id);
          setIsDropdownOpen(false);
        }
      },
    },
    {
      value: "edit",
      label: "수정",
      onClick: () => navigate(`/study/${id}/update`),
    },
    {
      value: "delete",
      label: "삭제",
      onClick: () => {
        if (window.confirm("정말 삭제할까요?")) {
          deleteStudyMutation.mutate(id);
        }
      },
    },
  ];

  return (
    <>
      <Layout>
        <ImageBoxResponsive
          className="thumbnail"
          src={sidebarData.src}
          {...props}
        />
        <Header>
          <TitleBox {...props}>
            <Highlight status={recruitState} {...props}>
              {recruitState ? "모집중" : "모집완료"}
            </Highlight>
            <Title {...props}>{titleData.title}</Title>
            <SubTitle {...props}>
              <Avatar size="small" src={titleData.src} {...props} />
              {titleData?.subtitle}
            </SubTitle>
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
              {sidebarData.badges?.map((children, idx) => {
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
          {data.writerInfo.userId === user.userId && (
            <DropdownBox>
              <Icon
                icon="moreVertical"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <Dropdown items={dropdownItems} size="small" {...props} />
              )}
            </DropdownBox>
          )}
        </Header>
        <Toc items={tocItem} {...props} />
        <Content {...props}>{contentData}</Content>
        <StudyDetailComment />
      </Layout>
      <FixedBox>
        <ButtonBg {...props} />
        <ButtonBox {...props}>
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

StudyDetailMobile.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.object,
};

StudyDetailMobile.defaultProps = {
  theme: THEME.LIGHT,
};

export default StudyDetailMobile;

const summaryData = [
  {
    title: "종류",
    icon: "target",
    id: "type",
  },
  {
    title: "목표 기업",
    icon: "building",
    id: "target",
  },
  {
    title: "진행 방식",
    icon: "tag",
    id: "onOff",
  },
  {
    title: "모집 인원",
    icon: "users",
    id: "people",
  },
];
