import { Navigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  modalState,
  loginModalState,
  isLoginState,
  isAuthenticated,
} from "@/recoil";

import { AuthCheck } from "@/containers";

const PrivateRoute = ({
  component: RouteComponent,
  fallback: fallbackUrl,
  checkAuthorized,
}) => {
  const isAuthorized = useRecoilValue(isAuthenticated);
  const isLogined = useRecoilValue(isLoginState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const setModalOpen = useSetRecoilState(modalState);

  if (!isLogined) {
    setLoginModalOpen("require");
    return <Navigate to={`/${fallbackUrl}`} />;
  }

  if (checkAuthorized && !isAuthorized) {
    setModalOpen(AuthCheck);
    return <Navigate to={`/${fallbackUrl}`} />;
  }

  if (!checkAuthorized || isAuthorized) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
