import React from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { StudyCreateIntro, StudyUpdateForm, ErrorBoundary } from "@/containers";

const StudyCreatePage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <ErrorBoundary fallback={<div />}>
      <StudyCreateIntro theme={theme} />
      <StudyUpdateForm theme={theme} />
    </ErrorBoundary>
  );
};

export default StudyCreatePage;
