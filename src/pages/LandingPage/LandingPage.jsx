import React from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { LandingHero } from "@/containers";

const LandingPage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <>
      <LandingHero theme={theme} />
    </>
  );
};

export default LandingPage;
