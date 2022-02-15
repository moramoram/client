import { Navigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { authState, modalState, loginModalState, isLoginState } from "@/recoil";

const PrivateRoute = ({
  component: RouteComponent,
  fallback: fallbackUrl,
  checkAuthorized,
}) => {
  const isLogined = useRecoilValue(isLoginState);
  const authorizedState = useRecoilValue(authState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const setModalOpen = useSetRecoilState(modalState);

  if (!isLogined) {
    setLoginModalOpen("require");
    return <Navigate to={`/${fallbackUrl}`} />;
  }

  if (checkAuthorized && authorizedState === 1) {
    setModalOpen(true);
    return <Navigate to={`/${fallbackUrl}`} />;
  }

  if (checkAuthorized && authorizedState === 2) {
    setModalOpen(true);
    return <Navigate to={`/${fallbackUrl}`} />;
  }

  if (!checkAuthorized || authorizedState === 3) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
