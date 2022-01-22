import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "client/src/Layout";

const Router = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<div>Landing Page</div>} />
        <Route path="main" element={<div>Main Page</div>} />
        <Route path="recruit" element={<div>Recruit Page</div>} />
        <Route
          path="recruit/:recruitId"
          element={<div>Recruit Detail Page</div>}
        />
        <Route path="study" element={<div>Study Page</div>} />
        <Route path="study/:studyId" element={<div>Study Detail Page</div>} />
        <Route path="community" element={<div>Community Page</div>} />
        <Route
          path="community/:contentsId"
          element={<div>Contents Page</div>}
        />
        <Route path="*" element={<div>page not found</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
