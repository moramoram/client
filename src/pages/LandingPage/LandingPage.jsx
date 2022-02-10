import React from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { Three } from "@/components";
import { LandingHero, ErrorBoundary } from "@/containers";

const LandingPage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <ErrorBoundary fallback={<div />}>
      <LandingHero theme={theme} />
      <Three theme={theme} />
    </ErrorBoundary>
  );
};

export default LandingPage;
