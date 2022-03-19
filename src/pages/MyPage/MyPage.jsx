import React, { Suspense } from "react";
import { MyPages } from "@/containers/MyPage";
import { LoadingMyPages } from "@/containers/Loading";

const MyPage = () => {
  return (
    <Suspense fallback={<LoadingMyPages />}>
      <MyPages />
    </Suspense>
  );
};

export default MyPage;
