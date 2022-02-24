import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAuthenticatedState, navTypeState, themeState } from "@/recoil";

import {
  StudyIntro,
  StudyMain,
  StudyMainMobile,
  ErrorBoundary,
} from "@/containers";
import { ScrollTopButton } from "@/components";
import { throttle } from "@/utils";

const StudyPage = () => {
  const theme = useRecoilValue(themeState);
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
      <ScrollTopBox>
        <ScrollTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          theme={theme}
        />
      </ScrollTopBox>
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
    title: "내 관심 스터디",
  },
];
export default StudyPage;

const ScrollTopBox = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 999;
`;
