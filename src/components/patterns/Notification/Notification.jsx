import React from "react";
import PropTypes from "prop-types";

import { useMediaQuery } from "react-responsive";

import {
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
  data,
  ...props
}) => {
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <>
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
          <DeleteAll>모두 삭제</DeleteAll>
        </DropdownHeader>
        <MenuBox {...props}>
          {data ? (
            data.map(({ notificationId, ...data }) => (
              <NotificationItem
                key={notificationId}
                id={notificationId}
                {...data}
                {...props}
              />
            ))
          ) : (
            <EmptyBox>새로운 알림이 없습니다</EmptyBox>
          )}
        </MenuBox>
      </Dropdown>
    </>
  );
};

export default Notification;

Notification.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.node,
};

Notification.defaultProps = {
  theme: THEME.LIGHT,
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
