import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  ContentBox,
  AvatarBox,
  TextBox,
  CreatedAt,
  CloseBox,
} from "./NotificationItem.styled";
import { Icon } from "@/foundations";
import { Avatar } from "@/components";

import { daysFromToday } from "@/utils";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const STATUS = {
  NEW: "new",
  DEFAULT: "default",
};

const NotificationItem = ({ id, status, message, createdDate, ...props }) => {
  return (
    <Layout status={status} {...props}>
      <ContentBox>
        <AvatarBox {...props}>
          <Avatar size="large" src="/images/admin.svg" />
        </AvatarBox>
        <TextBox {...props}>
          {message}
          <CreatedAt>{daysFromToday(createdDate)}</CreatedAt>
        </TextBox>
      </ContentBox>
      <CloseBox>
        <Icon icon="x" width="12px" />
      </CloseBox>
    </Layout>
  );
};

NotificationItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  message: PropTypes.node.isRequired,
  createdDate: PropTypes.node,
  status: PropTypes.oneOf(Object.values(STATUS)),
};

NotificationItem.defaultProps = {
  theme: THEME.LIGHT,
  message: "싸피 인증이 승인되었어요. 이제 모든 서비스를 이용해보세요!",
  createdDate: new Date(),
  status: STATUS.DEFAULT,
};

export default NotificationItem;
