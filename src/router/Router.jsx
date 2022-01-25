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
} from "@/pages";
const Router = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>Landing Page</div>} />
        <Route path="main" element={<div>Main Page</div>} />
        <Route path="job" element={<JobPage />} />
        <Route path="job/create" element={<JobCreatePage />} />
        <Route path="job/:jobId" element={<JobDetailPage />} />
        <Route path="study" element={<StudyPage />} />
        <Route path="study/create" element={<StudyCreatePage />} />
        <Route path="study/:studyId" element={<StudyDetailPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="community/:contentsId" element={<CommunityDetailPage />} />
        <Route path="*" element={<div>page not found</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
