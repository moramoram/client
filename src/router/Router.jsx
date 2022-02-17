import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
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
  PrivacyPage,
  TermsPage,
  MadeByPage,
} from "@/pages";

const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<div />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={<div />}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route path="main" element={<MainPage />} />
        <Route path="job" element={<JobPage />} />
        <Route path="job/create" element={<JobCreatePage />} />
        <Route
          path="job/create"
          element={
            <Suspense fallback={<div />}>
              <PrivateRoute
                component={JobCreatePage}
                fallback="job"
                checkAuthorized
              />
            </Suspense>
          }
        />
        <Route
          path="job/:jobId"
          element={
            <Suspense fallback={<div />}>
              <PrivateRoute
                component={JobDetailPage}
                fallback="job"
                checkAuthorized
              />
            </Suspense>
          }
        />
        <Route path="study" element={<StudyPage />} />
        <Route
          path="study/create"
          element={
            <Suspense fallback={<div />}>
              <PrivateRoute
                component={StudyCreatePage}
                fallback="study"
                checkAuthorized
              />
            </Suspense>
          }
        />
        <Route
          path="study/:studyId"
          element={
            <Suspense fallback={<div />}>
              <PrivateRoute
                component={StudyDetailPage}
                fallback="study"
                checkAuthorized
              />
            </Suspense>
          }
        />
        <Route
          path="study/:studyId/update"
          element={
            <Suspense fallback={<div />}>
              <PrivateRoute
                component={StudyUpdatePage}
                fallback="study"
                checkAuthorized
              />
            </Suspense>
          }
        />

        <Route
          path="community"
          element={
            <Suspense fallback={<div />}>
              <CommunityPage />
            </Suspense>
          }
        />
        <Route
          path="community/:contentId"
          element={
            <Suspense fallback={<div />}>
              <PrivateRoute
                component={CommunityDetailPage}
                fallback="community"
                checkAuthorized
              />
            </Suspense>
          }
        />

        <Route
          path="mypage"
          element={
            <Suspense fallback={<div />}>
              <PrivateRoute component={MyPage} fallback="main" />
            </Suspense>
          }
        />
        <Route path="auth/login/*" element={<LoginPage />} />
        <Route path="auth/login/*" element={<LoginPage />} />
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
