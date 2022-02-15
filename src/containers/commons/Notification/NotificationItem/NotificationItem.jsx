import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { GetNotification, DeleteNotification } from "@/api";

import { Icon } from "@/foundations";
import { Avatar } from "@/components";
import { colors, fontSize, fontWeight } from "@/_shared";

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
        <Icon icon="x" width="12px" stroke={colors.gray400} />
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

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const hoverColor = {
  dark: colors.gray700,
  light: colors.gray100,
};

const avatarBgColor = {
  dark: colors.gray800,
  light: colors.gray50,
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 300px;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  :hover {
    background-color: ${(props) => hoverColor[props.theme]};
  }

  ${(props) =>
    props.status === "new" &&
    css`
      background-color: ${colors.blueOpacity50};
      :hover {
        background-color: ${colors.blueOpacity100};
      }
      :active {
        background-color: ${colors.blueOpacity50};
      }
    `}
`;

const ContentBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  width: 100%;
`;

const AvatarBox = styled.div`
  background-color: ${(props) => avatarBgColor[props.theme]};
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  color: ${(props) => textColor[props.theme]};
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};

  min-height: 40px;
  width: 100%;
`;

const CreatedAt = styled.div`
  font-size: ${fontSize.xs};
  line-height: ${fontSize.xs};
  color: ${colors.gray500};
`;

const CloseBox = styled.div`
  padding: 1rem;
`;
