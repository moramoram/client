import React, { useEffect, useCallback } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { auth } from "@/recoil/auth";

import queryString from "query-string";

import { axiosInstance } from "@/utils";
import Layout from "@/Layout";

import {
  LandingPage,
  MainPage,
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
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const setAuth = useSetRecoilState(auth);

  const getToken = useCallback(async () => {
    const { data } = await axiosInstance({
      url: "/auth/login/google",
      method: "post",
      params: {
        code: parsed.code,
      },
    });
    console.log(data);
    setAuth(data);
  }, [parsed.code, setAuth]);

  useEffect(() => {
    if (parsed.code) {
      getToken();
    }
  }, [parsed, getToken]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="job" element={<JobPage />} />
        <Route path="job/create" element={<JobCreatePage />} />
        <Route path="job/:jobId" element={<JobDetailPage />} />
        <Route path="study" element={<StudyPage />} />
        <Route path="study/create" element={<StudyCreatePage />} />
        <Route path="study/:studyId" element={<StudyDetailPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="community/:contentsId" element={<CommunityDetailPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="*" element={<div>page not found</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
