import React, { Suspense } from "react";

import { useRecoilValue } from "recoil";
import { isLoginState } from "@/recoil";

import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import { PrivateRoute } from "@/router";
import { useGaTracker } from "@/hooks";

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
  PrivacyPage,
  TermsPage,
  MadeByPage,
} from "@/pages";

const Router = () => {
  const isLogined = useRecoilValue(isLoginState);
  useGaTracker();

  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<div />}>
            <Layout />
          </Suspense>
        }
      >
        <Route path="/" element={isLogined ? <MainPage /> : <LandingPage />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="job" element={<JobPage />} />
        <Route
          path="job/create"
          element={<PrivateRoute component={JobCreatePage} fallback="job" />}
        />
        <Route
          path="job/:jobId"
          element={<PrivateRoute component={JobDetailPage} fallback="job" />}
        />
        <Route path="study" element={<StudyPage />} />
        <Route
          path="study/create"
          element={
            <PrivateRoute component={StudyCreatePage} fallback="study" />
          }
        />
        <Route
          path="study/:studyId"
          element={
            <PrivateRoute component={StudyDetailPage} fallback="study" />
          }
        />
        <Route
          path="study/:studyId/update"
          element={
            <PrivateRoute component={StudyUpdatePage} fallback="study" />
          }
        />

        <Route path="community" element={<CommunityPage />} />
        <Route
          path="community/:contentId"
          element={
            <PrivateRoute
              component={CommunityDetailPage}
              fallback="community"
            />
          }
        />
        <Route
          path="mypage"
          element={<PrivateRoute component={MyPage} fallback="main" />}
        />
        <Route path="auth/login/*" element={<LoginPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/madeby" element={<MadeByPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
