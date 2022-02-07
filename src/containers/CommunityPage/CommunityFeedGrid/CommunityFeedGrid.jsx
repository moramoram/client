import React, { useRef } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import {
  GetDummyApi,
  // GetInfiniteQuery,
  CommunityFeedSelector,
} from "@/queries";
import { FeedGrid } from "@/containers";

const CommunityFeedGrid = () => {
  const theme = useRecoilValue(themeState);
  const loader = useRef(null);
  // const { data, fetchNextPage } = GetInfiniteQuery();
  const { data } = GetDummyApi();
  const { feedData } = CommunityFeedSelector(mockdata);

  const onFetchNewData = () => {
    const token = localStorage.getItem("token");
    token ? console.log(data.name) : console.log("requirelogin");
  };

  useIntersectionObserver({
    target: loader,
    onIntersect: onFetchNewData,
    enabled: true,
  });

  return (
    <>
      <CommentFeedGrid data={feedData} theme={theme} />
      <div ref={loader} />
    </>
  );
};

export default CommunityFeedGrid;

const mockdata = [
  {
    boardId: 8,
    boardType: 2,
    writerInfo: {
      nickname: "익명",
      ordinal: null,
      campus: null,
      authCheck: 0,
    },
    title: "this is test",
    content:
      "오 라일락 꽃이 지는 날 goodbye 이런 결말이 어울려 안녕 꽃잎 같은 안녕 하이얀 우리 봄날의 climax 아 얼마나 기쁜 일이야 Ooh ooh Love me only till this spring 봄바람처럼 Ooh ooh Love me only till this spring 봄바람처럼 기분이 달아 콧노래 부르네 (랄라)",
    views: 3,
    totalComment: 1,
    totalLike: 1,
    createdDate: "2022-01-27T21:34:05",
    modifiedDate: "2022-02-03T21:55:29",
    thumbnail: "https://image.bugsm.co.kr/album/images/500/40271/4027185.jpg",
  },
  {
    boardId: 5,
    boardType: 2,
    writerInfo: {
      nickname: "익명",
      ordinal: null,
      campus: null,
      authCheck: 0,
    },
    title: "this is test",
    content: "lalalall",
    views: 0,
    totalComment: 0,
    totalLike: 0,
    createdDate: "2022-01-27T21:33:53",
    modifiedDate: "2022-01-27T21:33:53",
  },
  {
    boardId: 3,
    boardType: 2,
    writerInfo: {
      nickname: "익명",
      ordinal: null,
      campus: null,
      authCheck: 0,
    },
    title: "this is test",
    content: "lalalall",
    views: 3,
    totalComment: 1,
    totalLike: 0,
    createdDate: "2022-01-27T18:39:04",
    modifiedDate: "2022-02-01T13:16:57",
  },
  {
    boardId: 2,
    boardType: 2,
    writerInfo: {
      nickname: "익명",
      ordinal: null,
      campus: null,
      authCheck: 0,
    },
    title: "출출하당",
    content: "I’m such a good surfer 가라앉지 않기 비틀 비 비틀 거리다가 ",
    views: 1,
    totalComment: 0,
    totalLike: 0,
    createdDate: "2022-01-27T18:38:57",
    modifiedDate: "2022-01-27T21:50:27",
  },
];

const CommentFeedGrid = styled(FeedGrid)`
  width: 100%;
  > a {
    width: 90vw;
    @media screen and (min-width: 980px) {
      max-width: calc(100%);
    }
  }
`;
