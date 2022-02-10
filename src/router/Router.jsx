import React, { useEffect, useCallback } from "react";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { auth, token } from "@/recoil";

import queryString from "query-string";
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
  CommunityPage,
  CommunityDetailPage,
  MyPage,
} from "@/pages";

const Router = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const parsed = queryString.parse(location.search);

  const [jwtToken, setToken] = useRecoilState(token);
  const setAuth = useSetRecoilState(auth);

  const getToken = useCallback(async () => {
    const { data } = await axiosInstance({
      url: "/auth/login/google",
      method: "post",
      params: {
        code: parsed.code,
      },
    });
    setToken({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    });
    navigate(-2);
  }, [parsed.code, setToken, navigate]);

  const getMyPageInfo = async () => {
    const { data } = await axiosInstance({ url: "users/me" });
    console.log(data);
    setAuth(data);
  };

  useEffect(() => {
    if (parsed.code) {
      getToken();
    }
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
        <Route path="job/:jobId" element={<JobDetailPage />} />
        <Route path="study" element={<StudyPage />} />
        <Route path="study/create" element={<StudyCreatePage />} />
        <Route
          path="study/:studyId"
          element={
            <PrivateRoute component={StudyDetailPage} fallback="study" />
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
        <Route path="mypage" element={<MyPage />} />
        <Route path="auth/login/*" element={<LoginPage />} />
        <Route path="*" element={<div>page not found</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
