import React, { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Router from "@/router/Router";

const App = () => {
  return (
    <StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Router />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </StrictMode>
  );
};

export default App;
