import React, { Suspense, lazy } from "react";

import { useRecoilValue } from "recoil";
import { isLoginState } from "@/recoil";

import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "@/router";

import { useGaTracker } from "@/hooks";

import Layout from "@/Layout";
import EmptyPage from "@/pages/CommonPage/EmptyPage";

const LandingPage = lazy(() => import("@/pages/LandingPage/LandingPage"));
const MainPage = lazy(() => import("@/pages/MainPage/MainPage"));

const JobPage = lazy(() => import("@/pages/JobPage/JobPage"));
const JobCreatePage = lazy(() => import("@/pages/JobPage/JobCreatePage"));
const JobDetailPage = lazy(() => import("@/pages/JobPage/JobDetailPage"));

const StudyPage = lazy(() => import("@/pages/StudyPage/StudyPage"));
const StudyCreatePage = lazy(() => import("@/pages/StudyPage/StudyCreatePage"));
const StudyDetailPage = lazy(() => import("@/pages/StudyPage/StudyDetailPage"));
const StudyUpdatePage = lazy(() => import("@/pages/StudyPage/StudyUpdatePage"));

const CommunityPage = lazy(() => import("@/pages/CommunityPage/CommunityPage"));
const CommunityDetailPage = lazy(() =>
  import("@/pages/CommunityPage/CommunityDetailPage")
);

const MyPage = lazy(() => import("@/pages/MyPage/MyPage"));
const LoginPage = lazy(() => import("@/pages/CommonPage/LoginPage"));
const TermsPage = lazy(() => import("@/pages/CommonPage/TermsPage"));
const PrivacyPage = lazy(() => import("@/pages/CommonPage/PrivacyPage"));
const MadeByPage = lazy(() => import("@/pages/CommonPage/MadeByPage"));
const NotFoundPage = lazy(() => import("@/pages/CommonPage/NotFoundPage"));

const Router = () => {
  const isLogined = useRecoilValue(isLoginState);
  useGaTracker();

  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<EmptyPage />}>
            <Layout />
          </Suspense>
        }
      >
        <Route path="/" element={isLogined ? <MainPage /> : <LandingPage />} />

        {routes.map(({ path, element, privateRoute }) => {
          return !privateRoute ? (
            <Route key={path} path={path} element={element} />
          ) : (
            <Route
              key={path}
              path={path}
              element={
                <PrivateRoute
                  component={element}
                  fallback={privateRoute.fallback}
                />
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Router;

const routes = [
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/job",
    element: <JobPage />,
  },
  {
    path: "/job/:jobId",
    element: <JobDetailPage />,
    privateRoute: {
      fallback: "job",
    },
  },
  {
    path: "/job/create",
    element: <JobCreatePage />,
    privateRoute: {
      fallback: "job",
    },
  },
  {
    path: "/study",
    element: <StudyPage />,
  },
  {
    path: "/study/create",
    element: <StudyCreatePage />,
    privateRoute: {
      fallback: "study",
    },
  },
  {
    path: "/study/:studyId",
    element: <StudyDetailPage />,
    privateRoute: {
      fallback: "study",
    },
  },
  {
    path: "/study/:studyId/update",
    element: <StudyUpdatePage />,
    privateRoute: {
      fallback: "study",
    },
  },
  {
    path: "/community",
    element: <CommunityPage />,
  },
  {
    path: "/community/:contentId",
    element: <CommunityDetailPage />,
    privateRoute: {
      fallback: "community",
    },
  },
  {
    path: "/mypage",
    element: <MyPage />,
    privateRoute: {
      fallback: "main",
    },
  },
  {
    path: "/auth/login/*",
    element: <LoginPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/madeby",
    element: <MadeByPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
