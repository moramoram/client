import React from "react";
import SignUpModal from ".";

export default {
  title: "Layouts/SignUpModal",
  component: SignUpModal,
};

export const Default = (args) => <SignUpModal {...args} />;

Default.args = {
  children: "개발자 계정으로 \n간편하게 시작하기",
};
