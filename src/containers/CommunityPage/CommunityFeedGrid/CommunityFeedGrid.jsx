import React, { useRef } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState, communityCategory } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { GetCommunityList, CommunityFeedSelector } from "@/queries";
import { FeedGrid } from "@/containers";

const CommunityFeedGrid = () => {
  const theme = useRecoilValue(themeState);
  const category = useRecoilValue(communityCategory);

  const loader = useRef(null);
  const { data, fetchNextPage, hasNextPage } = GetCommunityList(category);
  const { feedData } = CommunityFeedSelector(mockdata);

  const onFetchNewData = () => {
    fetchNextPage();
  };
  console.log(data);
  useIntersectionObserver({
    target: loader,
    onIntersect: onFetchNewData,
    enabled: hasNextPage,
  });

  return (
    <>
      <CommentFeedGrid data={feedData} theme={theme} />
      <FetchBox ref={loader} />
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
    content: `
      <>
        <p>
          <img
            src="https://file.mk.co.kr/meet/neds/2015/09/image_readtop_2015_891935_14423221542127136.jpg"
            alt="img"
          />
        </p>
        <h1>안녕하세요~~</h1>
        <p>오늘도 어김없이 여러분에게 꿀팁과 알뜰정보를 알려주러 왔어요!!</p>
        <p>
          <br />
        </p>
        <p>
          <img
            src="http://123emoji.com/wp-content/uploads/2017/08/sticker-8-45.png"
            alt="img"
          />
        </p>
        <p>
          <br />
        </p>
        <p>요즘은 바람도 쌀쌀하게 불고~~</p>
        <p>횐님들 모두 감기 조심하세요~~^^</p>
        <p>
          <br />
        </p>
        <p>
          <img
            src="http://123emoji.com/wp-content/uploads/2017/08/sticker-2-45.png"
            alt="img"
          />
        </p>
        <p>그럼 다음에 만나요!</p>
      </>
    `,
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
    thumbnail: "https://image.bugsm.co.kr/album/images/500/40271/4027185.jpg",
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
    thumbnail: "https://image.bugsm.co.kr/album/images/500/40271/4027185.jpg",
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
    thumbnail: "https://image.bugsm.co.kr/album/images/500/40271/4027185.jpg",
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

const FetchBox = styled.div`
  height: 30px;
`;
