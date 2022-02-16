import React, { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAuthenticatedState, navTypeState } from "@/recoil";

import {
  StudyIntro,
  StudyMain,
  StudyMainMobile,
  ErrorBoundary,
} from "@/containers";
import { throttle } from "@/utils";

const StudyPage = () => {
  const setNavType = useSetRecoilState(navTypeState);
  const [offset, setOffset] = useState(0);
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const category = isAuthenticated ? categoryData : categoryData.slice(0, 1);

  useEffect(() => {
    !!offset ? setNavType("default") : setNavType("transparent");
    return () => {
      setNavType("default");
    };
  }, [offset, setNavType]);

  useEffect(() => {
    const onScroll = throttle(() => setOffset(window.pageYOffset));

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <ErrorBoundary fallback={<div />}>
      <StudyIntro />
      {isPc && <StudyMain categoryData={category} />}
      {isMobile && <StudyMainMobile categoryData={category} />}
    </ErrorBoundary>
  );
};

const categoryData = [
  {
    id: 1,
    title: "전체",
  },
  {
    id: 2,
    title: "나의 스터디",
  },
];
export default StudyPage;
