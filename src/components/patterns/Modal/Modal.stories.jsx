import React from "react";
import Modal from "./";

export default {
  title: "Patterns/Modal",
  component: Modal,
};

export const Default = (args) => <Modal {...args} />;

Default.args = {
  title: "Job.ssafy로 연결됩니다",
  description: "연결시 Web DRM이 켜집니다.",
  secondary: "사양할게요",
  primary: "네! 들어갈게요",
  theme: "light",
};
