import React from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { LandingHero, Footer } from "@/containers";
import { Three } from "@/components";

const LandingPage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <>
      <LandingHero theme={theme} />
      <Three theme={theme} />
      <Footer />
    </>
  );
};

export default LandingPage;
