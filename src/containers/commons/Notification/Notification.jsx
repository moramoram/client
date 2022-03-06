import React from "react";
import PropTypes from "prop-types";

import { useMutation, useQueryClient } from "react-query";
import { GetNotificationList, DeleteNotificationsAll } from "@/api";
import { useMediaQuery } from "react-responsive";

import {
  Layout,
  Iconbox,
  Updated,
  Dropdown,
  CloseIconBox,
  DropdownHeader,
  Title,
  DeleteAll,
  MenuBox,
  EmptyBox,
} from "./Notification.styled";
import { NotificationItem } from "./NotificationItem";
import { Icon } from "@/foundations";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Notification = ({
  notificationOpen,
  setNotificationOpen,
  setDropdownOpen,
  ...props
}) => {
  const { data } = GetNotificationList();
  const isNew = data.filter((message) => !message.readCheck).length > 0;

  const queryClient = useQueryClient();
  const deleteAllMutation = useMutation(DeleteNotificationsAll, {
    onSuccess: () => {
      queryClient.invalidateQueries("getNotificationList");
    },
  });

  const handleClick = () => {
    deleteAllMutation.mutate();
  };

  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <Layout>
      <Iconbox
        onClick={() => {
          setNotificationOpen(!notificationOpen);
          setDropdownOpen(false);
        }}
      >
        <Icon icon="bell" width="20" aria-hidden />
        {isNew && <Updated />}
      </Iconbox>
      {notificationOpen && (
        <Dropdown {...props}>
          {isMobile && (
            <CloseIconBox>
              <Icon
                icon="arrowLeft"
                onClick={() => setNotificationOpen(false)}
                {...props}
              />
            </CloseIconBox>
          )}
          <DropdownHeader>
            <Title {...props}>알림</Title>
            <DeleteAll onClick={() => handleClick()}>모두 삭제</DeleteAll>
          </DropdownHeader>
          <MenuBox {...props}>
            {!data.length && <EmptyBox>새로운 알림이 없습니다</EmptyBox>}
            {data.map(({ notificationId, ...data }) => (
              <NotificationItem
                key={notificationId}
                id={notificationId}
                {...data}
                {...props}
              />
            ))}
          </MenuBox>
        </Dropdown>
      )}
    </Layout>
  );
};

export default Notification;

Notification.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

Notification.defaultProps = {
  theme: THEME.LIGHT,
};
