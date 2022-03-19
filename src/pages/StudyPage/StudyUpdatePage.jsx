import React, { Suspense, lazy } from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import EmptyPage from "@/pages/CommonPage/EmptyPage";

const StudyCreateIntro = lazy(() =>
  import("@/containers/StudyPage/StudyCreateIntro")
);
const StudyUpdateForm = lazy(() =>
  import("@/containers/StudyPage/StudyUpdateForm")
);
const StudyCreatePage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Suspense fallback={<EmptyPage />}>
      <StudyCreateIntro theme={theme} />
      <StudyUpdateForm theme={theme} />
    </Suspense>
  );
};

export default StudyCreatePage;
