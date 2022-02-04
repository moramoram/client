import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CommentList } from "@/containers";

import {
  Avatar,
  Toc,
  CommentInput,
  ImageBoxResponsive,
  Badge,
  Button,
  BookMark,
  SideBarItem,
} from "@/components";
import { Icon } from "@/foundations";
import { colors, fontSize, lineHeight, fontWeight, loadings } from "@/_shared";

import { useMutation, useQueryClient } from "react-query";
import { GetStudyDetail, convertToStudyDetail, postComment } from "@/queries";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyDetailMobile = ({ data, badges, ...props }) => {
  const [isMarked, setIsMarked] = useState(false);
  const queryClient = useQueryClient();
  const { dd } = GetStudyDetail();
  const { titleData, commentData, contentData, tocItem } =
    convertToStudyDetail(mockdata);

  const mutation = useMutation("postComment", postComment);

  const onPostComment = (comment) => {
    setIsMarked(!isMarked);
    mutation.mutate(comment.value, {
      onSuccess: () => {
        queryClient.invalidateQueries("getStudyDetail");
        console.log(dd);
      },
    });
  };

  return (
    <>
      <Layout>
        <ImageBoxResponsive className="thumbnail" {...props} />

        <TitleBox {...props}>
          <Highlight {...props}>{titleData?.highlight}</Highlight>
          <Title {...props}>{titleData?.title}</Title>
          <SubTitle {...props}>
            <Avatar size="medium" src={titleData?.src} {...props} />
            {titleData?.subtitle}
          </SubTitle>
          <SideBarBox>
            {summaryData.map(({ title, icon, id }) => (
              <SideBarItem
                className="contents-item"
                title={title}
                icon={icon}
                description={data[id]}
                key={id}
                {...props}
              />
            ))}
          </SideBarBox>
          <BadgeBox>
            {badges.map((children, idx) => {
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
        <CommentBox>
          <BoxTitle {...props}>댓글</BoxTitle>
          <BoxDescription {...props}>
            총 {commentData.length}개의 댓글이 달렸습니다.
          </BoxDescription>
          <CommentInput {...props} />
          <CommentList data={commentData} {...props} />
        </CommentBox>
      </Layout>
      <FixedBox>
        <ButtonBg {...props} />
        <ButtonBox {...props}>
          <Button
            mode={isMarked ? "active" : "secondary"}
            minWidth="380px"
            onClick={onPostComment}
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

const mockdata = {
  studyId: 2,
  writerInfo: {
    nickname: "su",
    ordinal: 0,
    campus: null,
    authCheck: 0,
  },
  comments: [
    {
      commentId: 1,
      content: "온라인으로는 진행을 안 하시는 건가요?",
      writerInfo: {
        nickname: "su",
        ordinal: 0,
        campus: null,
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
        ordinal: 0,
        campus: null,
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
        ordinal: 0,
        campus: null,
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
        ordinal: 0,
        campus: null,
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
    title: "모집 인원",
    icon: "users",
    id: "people",
  },
  {
    title: "스터디 지역",
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
  min-height: ${lineHeight.h4};

  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
`;

const Title = styled.div`
  min-width: 160px;
  min-height: ${lineHeight.h2};

  font-weight: ${fontWeight.bold};
  font-size: calc(${fontSize.h2} - 2px);
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 160px;
  min-height: ${lineHeight.h4};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h4};
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
