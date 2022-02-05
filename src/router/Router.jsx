import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { token, accessToken } from "@/recoil/auth";

import queryString from "query-string";

import { axiosInstance } from "@/utils";
import Layout from "@/Layout";

import {
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
  const jwtToken = useRecoilValue(accessToken);
  const setToken = useSetRecoilState(token);

  const getToken = async () => {
    const { data } = await axiosInstance({
      url: "users/auth/google",
      method: "post",
      params: {
        code: parsed.code,
      },
    });
    const { accessToken } = data;
    setToken({
      accessToken: accessToken,
    });
    localStorage.setItem("ssafe_token", JSON.parse(data));
  };

  useEffect(() => {
    if (parsed.code) {
      getToken();
    }
  });

  useEffect(() => {
    if (jwtToken) {
    }
  });

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>Landing Page</div>} />
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
