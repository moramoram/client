import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Icon } from "@/foundations";
import { Avatar } from "@/components";
import { colors, fontSize, fontWeight } from "@/_shared";

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
        <Icon icon="x" width="12px" stroke={colors.gray400} />
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

  min-height: 40px;
  width: 100%;

  color: ${(props) => textColor[props.theme]};
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};

  white-space: pre-line;
`;

const CreatedAt = styled.div`
  font-size: ${fontSize.xs};
  line-height: ${fontSize.xs};
  color: ${colors.gray500};
`;

const CloseBox = styled.div`
  padding: 1rem;
`;
