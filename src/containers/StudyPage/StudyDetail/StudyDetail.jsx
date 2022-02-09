import React, { useState } from "react";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { GetStudyDetail, convertToStudyDetail, postComment } from "@/queries";

import { CommentList, StudySideBar } from "@/containers";
import { Avatar, CommentInput, DropdownSmall, Toc } from "@/components";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const queryClient = useQueryClient();
  const { data } = GetStudyDetail();
  const { titleData, commentData, contentData, tocItem, sidebarData } =
    convertToStudyDetail(mockdata);

  const mutation = useMutation("postStudyDetailComment", postComment);

  const onPostComment = (comment) => {
    mutation.mutate(comment.value, {
      onSuccess: () => {
        queryClient.invalidateQueries("getStudyDetail");
        console.log(data.name);
      },
    });
  };

  const dropdownItems = [
    {
      name: "edit",
      title: "수정",
      onClick: () => console.log("수정"),
    },
    {
      name: "delete",
      title: "삭제",
      onClick: () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          console.log("삭제");
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
                <Avatar size="medium" src={titleData.src} {...props} />
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
        <div>
          <BoxTitle {...props}>댓글</BoxTitle>
          <BoxDescription {...props}>
            총 {commentData.length}개의 댓글이 달렸습니다.
          </BoxDescription>
          <CommentInput
            {...props}
            onClick={(comment) => onPostComment(comment)}
          />
          <CommentList data={commentData} {...props} />
        </div>
      </Layout>
      <StudySideBar {...props} data={sidebarData} />
    </>
  );
};

StudyDetail.defaultProps = {
  theme: THEME.LIGHT,
};

export default StudyDetail;

const mockdata = {
  studyId: 2,
  writerInfo: {
    nickname: "su",
    ordinal: 1,
    campus: "서울",
    authCheck: 0,
  },
  comments: [
    {
      commentId: 1,
      content: "온라인으로는 진행을 안 하시는 건가요?",
      writerInfo: {
        nickname: "su",
        ordinal: 1,
        campus: "서울",
        authCheck: 0,
      },
      createdDate: "2022-01-30T21:22:30",
      modifiedDate: "2022-01-30T21:25:56",
    },
    {
      commentId: 2,
      content: "너무 참여하고 싶어요!",
      writerInfo: {
        nickname: "su",
        ordinal: 1,
        campus: "서울",
        authCheck: 0,
      },
      createdDate: "2022-01-30T21:23:14",
      modifiedDate: "2022-01-30T21:23:14",
    },
    {
      commentId: 4,
      content: "너무 참여하고 싶어요!",
      writerInfo: {
        nickname: "su",
        ordinal: 1,
        campus: "서울",
        authCheck: 0,
      },
      createdDate: "2022-01-30T21:23:15",
      modifiedDate: "2022-01-30T21:23:15",
    },
    {
      commentId: 5,
      content: "너무 참여하고 싶어요!",
      writerInfo: {
        nickname: "su",
        ordinal: 1,
        campus: "서울",
        authCheck: 0,
      },
      createdDate: "2022-01-30T21:23:16",
      modifiedDate: "2022-01-30T21:23:16",
    },
  ],
  company_name: "삼성전자",
  title: "삼전 코테 대비 알고리즘 스터디 구합니다.",
  study_type: "취업 스터디",
  tech_stack: "java",
  recruitment: 0,
  location: "강남 역삼",
  on_off: 1,
  content: (
    <>
      <h3>1️⃣ 일 1️⃣ 커밋 알고리즘 스터디원을 모집합니다.</h3>
      <ul>
        <li>
          스터디 기간 : 2022년 2월 7일 (설날 연휴 지나고 시작) ~ 2022년 2월 28일
          (1달)
        </li>
        <li>스터디 목표 : 매일 알고리즘 문제를 풀어 코딩 테스트 뽀개기</li>
        <li>예상 모집 인원 : 4명</li>
      </ul>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <h3>📚 스터디는 이렇게 진행돼요</h3>
      <ul>
        <li>
          깃허브 주소를 공유하고 매일 알고리즘을 풀고 커밋 내역을 인증합니다.
        </li>
        <li>알고리즘 문제는 자유롭게 풀고싶은 문제로 풉니다.</li>
        <li>알고리즘과 무관한 커밋은 인정되지 않습니다.</li>
        <li>
          24시간 내에 인증을 하지 않으시면 1회 경고, 2회 경고 시 강퇴입니다.
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h3>🙇‍♂️ 이런 분이면 좋겠어요</h3>
      <ul>
        <li>매일 잔디를 심으며 꾸준함과 성실함을 키우고 싶으신 분</li>
        <li>알고리즘 문제 해결 능력을 키우고 싶으신 분</li>
        <li>코딩 테스트를 준비 중 이신 분</li>
      </ul>
    </>
  ),
  views: 2,
  totalScrap: 0,
  scrapStatus: false,
  createdDate: "2022-01-30T21:03:37",
  modifiedDate: "2022-02-01T13:19:47.775",
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

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
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
