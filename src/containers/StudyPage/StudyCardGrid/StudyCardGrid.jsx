import React, { useRef, useEffect, useState, useCallback } from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { useQuery } from "react-query";
import axios from "axios";

import { CardGrid } from "@/containers";

const StudyCardGrid = () => {
  const theme = useRecoilValue(themeState);

  const { items } = useQuery(
    "studyItems",
    () => axios("http://swapi.dev/api/people/1/"),
    { suspense: true }
  );

  return (
    <>
      <CardGrid data={cardData} theme={theme} />
    </>
  );
};

export default StudyCardGrid;

const cardData = new Array(24).fill({
  contents: {
    title: "주니어 프론트엔드 채용",
    subtitle: "싸페 디자인 시스템",
    highlight: "D-day",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
  id: "/study/1",
});

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
    content: "저녁으로 뭐 먹을까 ㅇㅅㅇ",
    views: 1,
    totalComment: 0,
    totalLike: 0,
    createdDate: "2022-01-27T18:38:57",
    modifiedDate: "2022-01-27T21:50:27",
  },
];
