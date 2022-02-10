import { Navigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { loginModalState, isLoginState, isAuthenticated } from "@/recoil";

const PrivateRoute = ({
  component: RouteComponent,
  fallback: fallbackUrl,
  checkAuthorized,
}) => {
  const isAuthorized = useRecoilValue(isAuthenticated);
  const isLogined = useRecoilValue(isLoginState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);

  if (!isLogined) {
    setLoginModalOpen("require");
    return <Navigate to={`/${fallbackUrl}`} />;
  }

  if (checkAuthorized && !isAuthorized) {
    return <Navigate to={`/${fallbackUrl}`} />;
  }

  if (!checkAuthorized || isAuthorized) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
