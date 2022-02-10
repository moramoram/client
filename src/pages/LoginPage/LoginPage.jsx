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
  const request = location.pathname.split("/")[3];

  const getToken = useCallback(async () => {
    const { data } = await axiosInstance({
      url: `/auth/login/${request}`,
      method: "post",
      params: {
        code: parsed.code,
      },
    });
    await setToken({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    });
    navigate("/");
  }, [parsed.code, setToken]);

  useEffect(() => {
    if (parsed.code) {
      getToken();
    }
  });

  return <ErrorBoundary fallback={<div />}> </ErrorBoundary>;
};

export default LoginPage;
