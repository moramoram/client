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
    true: "???????????? ????????? ?????????????",
    false: "??????????????? ?????? ????????????????",
  };

  const dropdownItems = [
    {
      value: "recruitment",
      label: recruitState ? "?????? ????????????" : "?????? ????????????",
      onClick: () => {
        if (window.confirm(confirmMsg[recruitState])) {
          putStudyRecruitsMutation.mutate(id);
          setIsDropdownOpen(false);
        }
      },
    },
    {
      value: "edit",
      label: "??????",
      onClick: () => navigate(`/study/${id}/update`),
    },
    {
      value: "delete",
      label: "??????",
      onClick: () => {
        if (window.confirm("?????? ????????????????")) {
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
              {recruitState ? "?????????" : "????????????"}
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
                <BookMark mode="primary" /> ????????? ??????
              </>
            ) : (
              <>
                <Icon icon="bookmark" /> ????????? ??????
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
    title: "??????",
    icon: "target",
    id: "type",
  },
  {
    title: "?????? ??????",
    icon: "building",
    id: "target",
  },
  {
    title: "?????? ??????",
    icon: "tag",
    id: "onOff",
  },
  {
    title: "?????? ??????",
    icon: "users",
    id: "people",
  },
];
