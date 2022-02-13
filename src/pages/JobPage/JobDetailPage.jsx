import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { useMediaQuery } from "react-responsive";

import {
  LoadingDetail,
  LoadingDetailMobile,
  JobDetail,
  JobDetailMobile,
  ErrorBoundary,
} from "@/containers";
import { daysFromToday } from "@/utils";

const JobsDetailPage = () => {
  const theme = useRecoilValue(themeState);

  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <ErrorBoundary fallback={<div />}>
      {isPc && (
        <Layout>
          <Suspense fallback={<LoadingDetail theme={theme} />}>
            <JobDetail
              cardData={cardData}
              commentData={commentData}
              theme={theme}
            ></JobDetail>
          </Suspense>
        </Layout>
      )}
      {isMobile && (
        <Layout>
          <Suspense fallback={<LoadingDetailMobile theme={theme} />}>
            <JobDetailMobile
              cardData={cardData}
              commentData={commentData}
              theme={theme}
            />
          </Suspense>
        </Layout>
      )}
    </ErrorBoundary>
  );
};

export default JobsDetailPage;

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

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 1280px;

  margin: auto;
`;
