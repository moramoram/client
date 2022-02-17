import React, { useState } from "react";
import styled from "styled-components";

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

import { StudySideBar, StudyDetailComment } from "@/containers";
import { Avatar, DropdownSmall, Toc } from "@/components";
import { Icon } from "@/foundations";
import {
  animations,
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  loadings,
} from "@/_shared";
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

const highlightColor = {
  true: colors.blue100,
  false: colors.gray500,
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
  light: colors.gray300,
  dark: colors.gray800,
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
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
  color: ${(props) => highlightColor[props.status]};
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
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 160px;
  min-height: ${lineHeight.lg};

  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.lg};
  color: ${(props) => subtitleColor[props.theme]};
`;

const DropdownBox = styled.div`
  position: relative;
  padding-top: 1rem;

  svg {
    stroke: ${colors.gray500};
    cursor: pointer;
  }

  > div {
    z-index: 9999;
    right: 0px;
    animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  }
`;

const Dropdown = styled(DropdownSmall)`
  width: 160px;
`;

const Content = styled.div`
  padding: 0 0 2rem 0;
  color: ${(props) => textColor[props.theme]};

  img {
    max-width: 100%;
  }

  h1 {
    padding: 3px 0;
    font-size: 1.5rem;
    font-weight: 700;
  }

  h2 {
    padding: 3px 0;
    font-size: 1.25rem;
    font-weight: 700;
  }

  h3 {
    padding: 3px 0;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    padding: 3px 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  ul,
  ol {
    padding-left: 32px;
  }

  pre {
    overflow-x: auto;
  }

  blockquote {
    margin-left: 0;
    padding-left: 1rem;
    border-left: 4px solid ${(props) => borderColor[props.theme]};
  }
`;
