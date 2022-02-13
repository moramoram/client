import React from "react";

import { NotificationItem } from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Notification/NotificationItem",
  component: NotificationItem,
};

export const Default = (args) => (
  <Background {...args}>
    <NotificationItem {...args} />
  </Background>
);

Default.args = {
  children: "싸피 인증이 승인되었어요. 이제 모든 서비스를 이용해보세요!",
};
