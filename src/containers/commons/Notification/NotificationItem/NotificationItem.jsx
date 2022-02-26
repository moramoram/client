import React, { useState } from "react";
import PropTypes from "prop-types";

import { useMutation, useQueryClient } from "react-query";
import { GetNotification, DeleteNotification } from "@/api";

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

const NotificationItem = ({
  id,
  readCheck,
  message,
  createdDate,
  ...props
}) => {
  const [readStatus, setReadStatus] = useState(readCheck);

  const queryClient = useQueryClient();
  const getItemMutation = useMutation(GetNotification, {
    onSuccess: () => {
      queryClient.invalidateQueries("getNotificationList");
    },
  });

  const handleClick = (id) => {
    getItemMutation.mutate(id);
    setReadStatus(true);
  };

  const deleteItemMutation = useMutation(DeleteNotification, {
    onSuccess: () => {
      queryClient.invalidateQueries("getNotificationList");
    },
  });

  const deleteNotification = (id) => {
    deleteItemMutation.mutate(id);
  };

  return (
    <Layout status={readStatus ? "default" : "new"} {...props}>
      <ContentBox onClick={() => handleClick(id)}>
        <AvatarBox {...props}>
          <Avatar size="large" src="/images/admin.svg" />
        </AvatarBox>
        <TextBox {...props}>
          {message}
          <CreatedAt>{daysFromToday(createdDate)}</CreatedAt>
        </TextBox>
      </ContentBox>
      <CloseBox onClick={() => deleteNotification(id)}>
        <Icon icon="x" width="12px" />
      </CloseBox>
    </Layout>
  );
};

NotificationItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  message: PropTypes.node.isRequired,
};

NotificationItem.defaultProps = {
  theme: THEME.LIGHT,
  message: "싸피 인증이 승인되었어요. 이제 모든 서비스를 이용해보세요!",
};

export default NotificationItem;
