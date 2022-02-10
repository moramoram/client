import React, { useEffect, useCallback } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { token } from "@/recoil";

import queryString from "query-string";
import { axiosInstance } from "@/utils";

import { ErrorBoundary } from "@/containers";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const parsed = queryString.parse(location.search);

  const setToken = useSetRecoilState(token);

  const getToken = useCallback(async () => {
    const { data } = await axiosInstance({
      url: "/auth/login/google",
      method: "post",
      params: {
        code: parsed.code,
      },
    });
    setToken(data);
    navigate(-2);
  }, [parsed.code, setToken, navigate]);

  useEffect(() => {
    if (parsed.code) {
      getToken();
    }
  });

  return <ErrorBoundary fallback={<div />}> </ErrorBoundary>;
};

export default LoginPage;
