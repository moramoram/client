import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { navTypeState } from "@/recoil/theme";

import { useMediaQuery } from "react-responsive";

import { JobIntro, JobMain, JobMainMobile } from "@/containers";

const JobsPage = () => {
  const setNavType = useSetRecoilState(navTypeState);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    !!offset ? setNavType("default") : setNavType("transparent");
    return () => {
      setNavType("default");
    };
  }, [offset, setNavType]);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:980px)",
  });

  return (
    <>
      <JobIntro />
      {isPc && <JobMain categoryData={categoryData} />}
      {isMobile && <JobMainMobile categoryData={categoryData} />}
    </>
  );
};

export default JobsPage;

const categoryData = [
  {
    id: 0,
    title: "마감 임박",
  },
  {
    id: 1,
    title: "최신순",
  },
  {
    id: 2,
    title: "인기순",
  },
  {
    id: 3,
    title: "싸피 채용관",
  },
  {
    id: 4,
    title: "내 관심 공고",
  },
];
