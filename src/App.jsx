import React, { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Router, ScrollToTop } from "@/router";

const App = () => {
  return (
    <StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/*" element={<Router />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </StrictMode>
  );
};

export default App;
