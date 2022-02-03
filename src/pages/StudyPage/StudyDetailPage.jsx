import React, { Suspense } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { useMediaQuery } from "react-responsive";

import { StudyDetail, StudyDetailMobile, StudySideBar } from "@/containers";
import { daysFromToday } from "@/utils";

const StudyDetailPage = () => {
  const theme = useRecoilValue(themeState);

  const itemId = useParams().studyId;
  console.log(itemId);

  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:979px)",
  });

  return (
    <>
      {isPc && (
        <Suspense fallback={"hello"}>
          <Layout>
            <StudyDetail theme={theme} contentData={contentData} />
            <FixedSidebar theme={theme} {...sidbarargs} />
          </Layout>
        </Suspense>
      )}
      {isMobile && (
        <Layout>
          <StudyDetailMobile
            titleData={titleData}
            tocItem={tocItem}
            contentData={contentData}
            theme={theme}
            commentData={commentData}
            {...sidbarargs}
          ></StudyDetailMobile>
        </Layout>
      )}
    </>
  );
};

export default StudyDetailPage;

const titleData = {
  title: "알고리즘 스터디 모집",
  subtitle: "김싸피 (6기/서울)",
  src: null,
  highlight: "모집중",
};

const contentData = (
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
);

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
    type: "알고리즘",
    target: "-",
    people: "4",
    location: "온라인",
  },

  badges: ["JavaScript", "TypeScript", "Vue.js", "React", "Redux", "Svelte"],
};

const tocItem = [
  {
    name: "info",
    title: "공고",
    number: null,
  },

  {
    name: "comments",
    title: "댓글",
    number: commentData.length,
  },
];

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 1280px;

  margin: auto;
`;

const FixedSidebar = styled(StudySideBar)`
  position: sticky;
  top: 180px;
`;
