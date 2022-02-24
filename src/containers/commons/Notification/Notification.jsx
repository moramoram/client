import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { GetNotificationList, DeleteNotificationsAll } from "@/api";
import { useMediaQuery } from "react-responsive";

import { NotificationItem } from "./NotificationItem";
import { Icon } from "@/foundations";
import { colors, shadows, animations, fontWeight, fontSize } from "@/_shared";

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
        <Icon icon="bell" stroke={colors.gray400} width="20" aria-hidden />
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

const borderColor = {
  dark: colors.gray800,
  light: colors.gray100,
};

const bgColor = {
  dark: colors.gray900,
  light: colors.white,
};

const boxShadow = {
  dark: "2px 2px 4px rgba(0, 0, 0, 0.185)",
  light: shadows.base,
};

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  position: relative;
  z-index: 99999;
`;

const Iconbox = styled.div`
  display: inline-block;
  position: relative;
`;

const Updated = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.blue100};
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  padding-bottom: 0.5rem;
  top: 38px;
  right: -48px;

  border-radius: 8px;
  border: 1px solid ${(props) => borderColor[props.theme]};

  overflow: hidden;
  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${(props) => boxShadow[props.theme]};

  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  z-index: 99999;

  @media screen and (max-width: 980px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    border-radius: 0;
  }
`;

const CloseIconBox = styled.div`
  display: flex;
  padding: 1rem;

  svg {
    width: 24px;
    stroke: ${colors.gray500};
    cursor: pointer;
  }
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
  color: ${(props) => titleColor[props.theme]};
  user-select: none;
`;

const DeleteAll = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.xs};
  color: ${colors.blue100};
  user-select: none;
`;

const MenuBox = styled.div`
  padding: 4px 0;
  max-height: 500px;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    justify-content: center;
  }
`;

const EmptyBox = styled.div`
  display: flex;
  padding: 1.5rem 0 3rem 0;

  width: 100%;
  min-width: 300px;

  color: ${colors.gray500};
  user-select: none;
`;
