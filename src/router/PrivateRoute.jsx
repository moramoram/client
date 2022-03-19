import React, { useEffect } from "react";

import { Navigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { loginModalState, isLoginState } from "@/recoil";

const PrivateRoute = ({ element: RouteComponent, fallback: fallbackUrl }) => {
  const isLogined = useRecoilValue(isLoginState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);

  useEffect(() => {
    !isLogined && setLoginModalOpen("require");
  });

  if (!isLogined) {
    return <Navigate to={`/${fallbackUrl}`} />;
  }

  return <RouteComponent />;
};

export default PrivateRoute;
