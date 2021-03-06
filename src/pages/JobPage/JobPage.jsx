import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginState, navTypeState, themeState } from "@/recoil";

import { JobIntro, JobMain, JobMainMobile } from "@/containers/JobPage";
import { ScrollTopButton } from "@/components";
import { throttle } from "@/utils";

const JobsPage = () => {
  const theme = useRecoilValue(themeState);
  const setNavType = useSetRecoilState(navTypeState);
  const [offset, setOffset] = useState(0);
  const isLogined = useRecoilValue(isLoginState);
  const category = isLogined ? categoryData : categoryData.slice(0, 3);

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
    <>
      <JobIntro />
      {isPc && <JobMain categoryData={category} />}
      {isMobile && <JobMainMobile categoryData={category} />}
      <ScrollTopBox>
        <ScrollTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          theme={theme}
        />
      </ScrollTopBox>
    </>
  );
};

export default JobsPage;

const categoryData = [
  {
    id: 1,
    title: "전체",
  },
  {
    id: 2,
    title: "마감 임박",
  },
  // {
  //   id: 3,
  //   title: "싸피 우대 공고",
  // },
  {
    id: 3,
    title: "내 관심 공고",
  },
];

const ScrollTopBox = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 999;
`;
