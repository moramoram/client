import React from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { StudyCreateIntro, StudyCreateForm } from "@/containers/StudyPage";

const StudyCreatePage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <>
      <StudyCreateIntro theme={theme} />
      <StudyCreateForm theme={theme} />
    </>
  );
};

export default StudyCreatePage;
