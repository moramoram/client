import React from "react";

import AvatarUploader from ".";
import { Background } from "@/foundations";

export default {
  title: "Patterns/AvatarUploader",
  component: AvatarUploader,
};

export const Default = (args) => <AvatarUploader {...args} />;

export const AllTypes = () => (
  <>
    <Background theme="light">
      <AvatarUploader theme="light" />
    </Background>
    <Background theme="dark">
      <AvatarUploader theme="dark" />
    </Background>
  </>
);
