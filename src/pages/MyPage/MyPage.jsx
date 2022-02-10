import React, { Suspense } from "react";
import { MyPages, LoadingMyPages } from "@/containers";

const MyPage = () => {
  return (
    <Suspense fallback={<LoadingMyPages />}>
      <MyPages />
    </Suspense>
  );
};

export default MyPage;
