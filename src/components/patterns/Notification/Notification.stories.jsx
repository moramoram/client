import React from "react";

import Notification from ".";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Notification",
  component: Notification,
};

export const Default = (args) => <Notification {...args} />;

Default.args = {
  data: [
    {
      message:
        "축하드려요! ✨ \n SSAFY 인증이 완료되었어요. \n\n 재로그인 하시면 모든 서비스를 이용할 수 있어요 :)",
      createdDate: new Date(),
      status: "new",
    },
    {
      message: "처음 오신 것을 환영해요! ✨",
      createdDate: new Date(),
      status: "default",
    },
  ],
};

export const AllType = () => (
  <>
    <Background theme="light">
      <Notification />
    </Background>
    <Background theme="dark">
      <Notification theme="dark" />
    </Background>
  </>
);
