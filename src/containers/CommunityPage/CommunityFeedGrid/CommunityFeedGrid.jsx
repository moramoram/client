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
    content: "lalalall",
    views: 3,
    totalComment: 1,
    totalLike: 1,
    createdDate: "2022-01-27T21:34:05",
    modifiedDate: "2022-02-03T21:55:29",
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
    content:
      "I’m such a good surfer 가라앉지 않기 비틀 비 비틀 거리다가 풍덩 uh 빠지더라도 구명복 따윈 졸업 I’m such a good surfer 휩쓸리지 않기 울렁 우 울렁 거리다가 throw up 게워내더라도 지는 건 난 못 참아 제일 높은 파도 올라타타 라차차우아 해일과 함께 사라질 타이밍 그건 내가 골라 무슨 소리 겁이 나기는, 재밌지 뭐 어어어 푸푸푸 또 허허허 우우우적",
    views: 1,
    totalComment: 0,
    totalLike: 0,
    createdDate: "2022-01-27T18:38:57",
    modifiedDate: "2022-01-27T21:50:27",
  },
];

const CommentFeedGrid = styled(FeedGrid)`
  > a {
    min-width: 100%;
  }
`;
