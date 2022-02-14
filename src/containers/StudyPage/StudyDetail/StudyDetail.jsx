import React, { useState } from "react";
import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { GetStudyDetail, StudyDetailSelector, DeleteStudy } from "@/api";

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

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyDetail = ({ ...props }) => {
  const id = useParams().studyId;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data } = GetStudyDetail(id);
  const { titleData, contentData, tocItem, sidebarData } =
    StudyDetailSelector(data);

  const deleteStudyMutation = useMutation(DeleteStudy, {
    onSuccess: () => {
      navigate("/study");
      queryClient.invalidateQueries("getStudyList");
    },
  });

  const dropdownItems = [
    {
      name: "edit",
      title: "수정",
      onClick: () => navigate(`/study/${id}/update`),
    },
    {
      name: "delete",
      title: "삭제",
      onClick: () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
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
            <Highlight {...props}>{titleData.highlight}</Highlight>
            <Title {...props}>{titleData.title}</Title>
            <div>
              <SubTitle {...props}>
                <Avatar size="small" src={titleData.src} {...props} />
                {titleData.subtitle}
              </SubTitle>
            </div>
          </TitleBox>
          <DropdownBox>
            <Icon
              icon="moreVertical"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <DropdownSmall items={dropdownItems} size="small" {...props} />
            )}
          </DropdownBox>
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
