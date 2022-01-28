import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";

import { SubNavbar } from "@/components";
import { CardGrid, StudyIntro } from "@/containers";

const StudyPage = () => {
  const theme = useRecoilValue(themeState);
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

  const handleCategory = (e) => {
    console.log(e);
  };

  return (
    <>
      <StudyIntro />
      <ContentBox>
        <StickyNavBox>
          <StickyNav
            data={categoryData}
            theme={theme}
            onClick={handleCategory}
          />
        </StickyNavBox>
        <CardGridBox data={cardData} theme={theme} />
      </ContentBox>
    </>
  );
};

export default StudyPage;

const categoryData = [
  {
    id: 0,
    title: "전체",
  },
  {
    id: 1,
    title: "인기순",
  },
  {
    id: 2,
    title: "나의 스터디",
  },
];

const cardData = [
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  },
];

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  max-width: 1280px;

  padding: 80px 20px 20px 20px;
  margin: auto;
`;

const StickyNavBox = styled.div``;

const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;

const CardGridBox = styled(CardGrid)`
  width: calc(100% - 320px);
`;
