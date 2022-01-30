import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { useMediaQuery } from "react-responsive";

import { JobDetail, JobDetailMobile, JobSideBar } from "@/containers";
import { daysFromToday } from "@/utils";

const JobsDetailPage = ({ match }) => {
  const theme = useRecoilValue(themeState);

  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:979px)",
  });

  return (
    <>
      {isPc && (
        <Layout>
          <JobDetail
            titleData={titleData}
            contentData={contentData}
            cardData={cardData}
            commentData={commentData}
            theme={theme}
          ></JobDetail>
          <FixedSidebar {...sidbarargs} theme={theme} />
        </Layout>
      )}
      {isMobile && (
        <Layout>
          <JobDetailMobile
            titleData={titleData}
            contentData={contentData}
            cardData={cardData}
            commentData={commentData}
            theme={theme}
            {...sidbarargs}
          />
        </Layout>
      )}
    </>
  );
};

export default JobsDetailPage;

const titleData = {
  title: "프론트엔드 엔지니어 채용",
  subtitle: "싸피아이티시스템",
  highlight: "모집중",
};

const contentData = (
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
      <li>React 등을 활용한 3년 이상 혹은 그에 준하는 개발 능력을 보유한 분</li>
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
        경조금(휴가) 및 연차, 코로나 백신휴가, 건강검진/예비군 훈련 시 공가휴가
        제공(연차에서 차감 안됨), 조식제공
      </li>
      <li>워크샵, 책모임, 스터디</li>
    </ul>
  </>
);

const cardData = [
  {
    contents: {
      title: "싸피이이티시스템 면접 스터디",
      highlight: "모집중",
      src: "",
    },
    url: "",
    isDisabled: false,
    isLiked: false,
  },
  {
    contents: {
      title: "싸피이이티 2차 면접",
      highlight: "모집완료",
      src: "",
    },
    url: "",
    isDisabled: true,
    isLiked: false,
  },
  {
    contents: {
      title: "싸피이이티 2차 면접",
      highlight: "모집완료",
      src: "",
    },
    url: "",
    isDisabled: true,
    isLiked: false,
  },
];

const commentData = [
  {
    username: "Lorem",
    src: null,
    created: daysFromToday("2022-01-31"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in lorem ut sapien placerat vulputate.",
  },
  {
    username: "홍길동",
    src: null,
    created: daysFromToday("2022-01-30"),
    content:
      "Nam tempus, est id rutrum suscipit, metus mi tincidunt nulla, ut rutrum magna tortor non velit. Suspendisse gravida pretium porta. Praesent eget vestibulum mauris. Nullam aliquet enim felis, in iaculis purus tempus pharetra.",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-24"),
    content:
      "Aliquam et lectus ultricies, fringilla ipsum ac, vulputate sapien.",
  },
  {
    username: "김싸페",
    src: null,
    created: daysFromToday("2022-01-12"),
    content:
      "Integer nulla sem, eleifend non ex id, aliquam tempor tellus. Sed vehicula justo ut diam semper mollis.",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2021-12-10"),
    content:
      "Donec nec tristique arcu. Curabitur at facilisis nibh. Mauris vel nisi ipsum. Morbi vitae sapien metus. Ut et quam a erat rutrum maximus. Vestibulum non elementum enim. ",
  },
  {
    username: "아이유",
    src: null,
    created: daysFromToday("2021-07-10"),
    content:
      "Ut in bibendum metus. Duis sed egestas ante. Etiam ex tortor, vehicula ac mollis sit amet, dapibus eget urna.",
  },
  {
    username: "수지",
    src: null,
    created: daysFromToday("2020-07-10"),
    content:
      "Nam tempus, est id rutrum suscipit, metus mi tincidunt nulla, ut rutrum magna tortor non velit. Suspendisse gravida pretium porta. Praesent eget vestibulum mauris. Nullam aliquet enim felis, in iaculis purus tempus pharetra.",
  },
];

const sidbarargs = {
  data: {
    task: "프론트엔드",
    type: "정규직",
    career: "신입",
    location: "서울 강남구",
  },

  badges: ["JavaScript", "TypeScript", "Vue.js", "React", "Redux", "Svelte"],
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 1280px;

  margin: auto;
`;

const FixedSidebar = styled(JobSideBar)`
  position: sticky;
  top: 180px;
`;
