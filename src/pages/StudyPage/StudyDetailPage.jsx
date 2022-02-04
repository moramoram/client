import React, { Suspense } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { useMediaQuery } from "react-responsive";

import { StudyDetail, StudyDetailMobile, StudySideBar } from "@/containers";
import { daysFromToday } from "@/utils";

const StudyDetailPage = () => {
  const theme = useRecoilValue(themeState);

  const itemId = useParams().studyId;
  console.log(itemId);

  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:979px)",
  });

  return (
    <Layout>
      {isPc && (
        <Suspense fallback={"hello"}>
          <StudyDetail theme={theme} />
        </Suspense>
      )}
      {isMobile && (
        <Suspense fallback={"mobile"}>
          <StudyDetailMobile theme={theme} {...sidbarargs} />
        </Suspense>
      )}
    </Layout>
  );
};

export default StudyDetailPage;

const sidbarargs = {
  data: {
    type: "알고리즘",
    target: "-",
    people: "4",
    location: "온라인",
  },

  badges: ["JavaScript", "TypeScript", "Vue.js", "React", "Redux", "Svelte"],
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 1280px;
  margin: auto;
`;
