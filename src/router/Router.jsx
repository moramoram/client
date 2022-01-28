import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";

import {
  JobPage,
  JobCreatePage,
  JobDetailPage,
  StudyPage,
  StudyCreatePage,
  StudyDetailPage,
  CommunityPage,
  CommunityDetailPage,
  MyPage,
} from "@/pages";

const Router = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route element={<Layout />} preload={scrollTop}>
        <Route path="/" element={<div>Landing Page</div>} preload={scrollTop} />
        <Route path="main" element={<div>Main Page</div>} preload={scrollTop} />
        <Route path="job" element={<JobPage />} />
        <Route
          path="job/create"
          element={<JobCreatePage />}
          preload={scrollTop}
        />
        <Route
          path="job/:jobId"
          element={<JobDetailPage />}
          preload={scrollTop}
        />
        <Route path="study" element={<StudyPage />} />
        <Route
          path="study/create"
          element={<StudyCreatePage />}
          preload={scrollTop}
        />
        <Route
          path="study/:studyId"
          element={<StudyDetailPage />}
          preload={scrollTop}
        />
        <Route path="community" element={<CommunityPage />} />
        <Route
          path="community/:contentsId"
          element={<CommunityDetailPage />}
          preload={scrollTop}
        />
        <Route path="mypage" element={<MyPage />} preload={scrollTop} />
        <Route path="*" element={<div>page not found</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
