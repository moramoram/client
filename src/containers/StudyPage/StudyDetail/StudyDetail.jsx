import React, { useState } from "react";

import { useRecoilValue } from "recoil";
import { auth } from "@/recoil";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {
  GetStudyDetail,
  StudyDetailSelector,
  PutStudyRecruits,
  DeleteStudy,
} from "@/api";

import {
  Layout,
  Header,
  TitleBox,
  Highlight,
  Title,
  SubTitle,
  DropdownBox,
  Dropdown,
  Content,
} from "./StudyDetail.styled";
import { StudySideBar, StudyDetailComment } from "@/containers";
import { Avatar, Toc } from "@/components";
import { Icon } from "@/foundations";

import { useEffect } from "react";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyDetail = ({ ...props }) => {
  const id = useParams().studyId;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useRecoilValue(auth);

  const { data } = GetStudyDetail(id);
  const { titleData, contentData, tocItem, sidebarData } =
    StudyDetailSelector(data);
  const [recruitState, setRecruitState] = useState(null);

  useEffect(() => {
    setRecruitState(data.recruitment);
  }, [data.recruitment]);

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
      label: recruitState ? "모집 완료하기" : "다시 모집하기",
      value: "recruitment",
      onClick: () => {
        if (window.confirm(confirmMsg[recruitState])) {
          putStudyRecruitsMutation.mutate(id);
          setIsDropdownOpen(false);
        }
      },
    },
    {
      label: "수정",
      value: "edit",

      onClick: () => navigate(`/study/${id}/update`),
    },
    {
      label: "삭제",
      value: "delete",
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
        <Header>
          <TitleBox {...props}>
            <Highlight status={recruitState} {...props}>
              {recruitState ? "모집중" : "모집완료"}
            </Highlight>
            <Title {...props}>{titleData.title}</Title>
            <div>
              <SubTitle {...props}>
                <Avatar size="small" src={titleData.src} {...props} />
                {titleData.subtitle}
              </SubTitle>
            </div>
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
      <StudySideBar {...props} data={sidebarData} />
    </>
  );
};

StudyDetail.defaultProps = {
  theme: THEME.LIGHT,
};

export default StudyDetail;
