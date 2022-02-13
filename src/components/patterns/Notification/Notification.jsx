import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// import { NotificationItem } from "./NotificationItem";
import { Icon } from "@/foundations";
import { colors, shadows, animations, fontWeight, fontSize } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Notification = ({ isUpdated, ...props }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Layout>
      <Iconbox onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Icon icon="bell" stroke={colors.gray400} width="20" aria-hidden />
        {isUpdated && <Updated />}
      </Iconbox>
      {isDropdownOpen && (
        <Dropdown {...props}>
          <Title {...props}>알림</Title>
          <MenuBox {...props}>
            <EmptyBox>알림이 없습니다</EmptyBox>
            {/* <NotificationItem isNew {...props} />
            <NotificationItem {...props} />
            <NotificationItem {...props} /> */}
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
  position: fixed;
  padding: 0.5rem 0;
  top: 3rem;

  border-radius: 8px;
  border: 1px solid ${(props) => borderColor[props.theme]};

  overflow: hidden;
  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${(props) => boxShadow[props.theme]};

  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

const Title = styled.div`
  padding: 1rem;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
  color: ${(props) => titleColor[props.theme]};
`;

const MenuBox = styled.div`
  padding: 4px 0;

  > div {
    justify-content: center;
  }
`;

const EmptyBox = styled.div`
  display: flex;
  padding: 1rem 0 3rem 0;

  width: 100%;
  min-width: 300px;

  color: ${colors.gray500};
`;
