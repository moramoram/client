import React, { useEffect, useCallback } from "react";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  useRecoilState,
  // useRecoilValue,
  // useSetRecoilState,
  // useResetRecoilState,
} from "recoil";
import {
  // auth,
  token,
  // refreshToken
} from "@/recoil";

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
  const navigate = useNavigate();
  const parsed = queryString.parse(location.search);

  const [jwtToken, setToken] = useRecoilState(token);
  // const refresh = useRecoilValue(refreshToken);
  // const setAuth = useSetRecoilState(auth);
  // const resetToken = useResetRecoilState(token);
  // const resetAuth = useResetRecoilState(auth);

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
    navigate("/main");
  }, [parsed.code, setToken, navigate]);

  const getMyPageInfo = async () => {
    console.log("get user info");
    // await axiosInstance({
    //   url: "users/me",
    //   headers: {
    //     Authorization: `Bearer ${jwtToken}`,
    //   },
    // })
    //   .then(({ data }) => {
    //     setAuth({ data });
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (parsed.code) {
      getToken();
    }
  });

  useEffect(() => {
    if (jwtToken) {
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
        <Route path="study/:studyId" element={<StudyDetailPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="community/:contentId" element={<CommunityDetailPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="*" element={<div>page not found</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
