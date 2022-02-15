import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {
  GetStudyDetail,
  StudyDetailSelector,
  putStudyScrap,
  PutStudyRecruits,
  DeleteStudy,
} from "@/api";

import { StudyDetailComment } from "@/containers";
import {
  Avatar,
  Badge,
  BookMark,
  Button,
  DropdownSmall,
  ImageBoxResponsive,
  SideBarItem,
  Toc,
} from "@/components";
import { Icon } from "@/foundations";

import {
  animations,
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  loadings,
} from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyDetailMobile = ({ ...props }) => {
  const id = useParams().studyId;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      name: "recruitment",
      title: recruitState ? "모집 완료하기" : "다시 모집하기",
      onClick: () => {
        if (window.confirm(confirmMsg[recruitState])) {
          putStudyRecruitsMutation.mutate(id);
          setIsDropdownOpen(false);
        }
      },
    },
    {
      name: "edit",
      title: "수정",
      onClick: () => navigate(`/study/${id}/update`),
    },
    {
      name: "delete",
      title: "삭제",
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
          <DropdownBox>
            <Icon
              icon="moreVertical"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <Dropdown items={dropdownItems} size="small" {...props} />
            )}
          </DropdownBox>
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

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin: 20px 0px;
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
  color: ${(props) => highlightColor[props.status]};
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
  padding: 0 1rem 2rem 1rem;
  color: ${(props) => textColor[props.theme]};

  h3 {
    margin-bottom: 0;
  }

  ul {
    padding-left: 32px;
  }
`;

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
