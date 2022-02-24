import React from "react";

import Logo from "./";
import { Background, Typography } from "@/foundations";
import { colors } from "@/_shared";

export default {
  title: "Foundations/Logo",
  component: Logo,
};

export const Default = (args) => (
  <Background {...args}>
    <Logo {...args} width="20%" />
  </Background>
);

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Typography type="h4" style={{ color: colors.gray900 }}>
        Light
      </Typography>
      <Logo theme="light" width="20%" />
    </Background>
    <Background theme="blue">
      <Typography type="h4" style={{ color: colors.white }}>
        Blue
      </Typography>
      <Logo theme="blue" width="20%" />
    </Background>
    <Background theme="dark">
      <Typography type="h4" style={{ color: colors.white }}>
        Dark
      </Typography>
      <Logo theme="dark" width="20%" />
    </Background>
  </>
);
