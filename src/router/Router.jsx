import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { auth, token } from "@/recoil";

import { axiosInstance } from "@/utils";
import Layout from "@/Layout";
import { PrivateRoute } from "@/router";

import {
  LandingPage,
  LoginPage,
  MainPage,
  JobPage,
  JobCreatePage,
  JobDetailPage,
  StudyPage,
  StudyCreatePage,
  StudyDetailPage,
  StudyUpdatePage,
  CommunityPage,
  CommunityDetailPage,
  MyPage,
  NotFoundPage,
} from "@/pages";

const Router = () => {
  const jwtToken = useRecoilValue(token);
  const setAuth = useSetRecoilState(auth);

  const getMyPageInfo = async () => {
    const { data } = await axiosInstance({ url: "users/me" });
    setAuth(data);
  };

  useEffect(() => {
    if (!!jwtToken.accessToken) {
      getMyPageInfo();
    }
  });

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="job" element={<JobPage />} />
        <Route path="job/create" element={<JobCreatePage />} />
        <Route
          path="job/create"
          element={
            <PrivateRoute
              component={JobCreatePage}
              fallback="job"
              checkAuthorized
            />
          }
        />
        <Route
          path="job/:jobId"
          element={
            <PrivateRoute
              component={JobDetailPage}
              fallback="job"
              checkAuthorized
            />
          }
        />
        <Route path="study" element={<StudyPage />} />
        <Route
          path="study/create"
          element={
            <PrivateRoute
              component={StudyCreatePage}
              fallback="study"
              checkAuthorized
            />
          }
        />
        <Route
          path="study/:studyId"
          element={
            <PrivateRoute
              component={StudyDetailPage}
              fallback="study"
              checkAuthorized
            />
          }
        />
        <Route
          path="study/:studyId/update"
          element={
            <PrivateRoute
              component={StudyUpdatePage}
              fallback="study"
              checkAuthorized
            />
          }
        />
        <Route path="community" element={<CommunityPage />} />
        <Route
          path="community/:contentId"
          element={
            <PrivateRoute
              component={CommunityDetailPage}
              fallback="community"
              checkAuthorized
            />
          }
        />
        <Route
          path="mypage"
          element={<PrivateRoute component={MyPage} fallback="" />}
        />
        <Route path="auth/login/*" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
