import { Navigate, useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { loginModalState, isLoginState, isAuthenticated } from "@/recoil";

const PrivateRoute = ({ component: RouteComponent, fallback }) => {
  const isAccessable = useRecoilValue(isAuthenticated);
  const isLogined = useRecoilValue(isLoginState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const navigate = useNavigate();

  if (isAccessable) {
    return <RouteComponent />;
  }

  if (!isLogined) {
    setLoginModalOpen("require");
    return <Navigate to={`/${fallback}`} />;
  }

  if (!isAccessable) {
    return <Navigate to={`/${fallback}`} />;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
