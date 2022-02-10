import React, { Suspense } from "react";
import { MyPages, LoadingMyPages, ErrorBoundary } from "@/containers";

const MyPage = () => {
  return (
    <ErrorBoundary fallback={<div />}>
      <Suspense fallback={<LoadingMyPages />}>
        <MyPages />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MyPage;
