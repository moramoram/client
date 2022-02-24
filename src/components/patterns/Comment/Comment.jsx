import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Avatar, DropdownSmall } from "@/components";
import { Icon } from "@/foundations";
import { animations, colors, fontSize, fontWeight } from "@/_shared";

import { daysFromToday } from "@/utils";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Comment = ({
  username,
  ordinal,
  campus,
  src,
  created,
  content,
  commentId,
  dropdownItems,
  isDisabled,
  ...props
}) => {
  const usernameRender = username ?? "익명";
  const userDetailRender =
    ordinal && campus ? `(${ordinal}기 / ${campus})` : null;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !dropdownRef?.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isDropdownOpen]);

  return (
    <Layout>
      <ContentBox>
        <Avatar size="medium" username={username} src={src} {...props} />
        <TextBox>
          <InfoBox>
            <User {...props}>{usernameRender}</User>
            <UserDetail {...props}>{userDetailRender}</UserDetail>
            <CreatedAt>{created}</CreatedAt>
          </InfoBox>
          <Content {...props}>{content}</Content>
        </TextBox>
      </ContentBox>
      <DropdownBox
        className="dropdown"
        ref={dropdownRef}
        isDropdownOpen={isDropdownOpen}
      >
        {!isDisabled && (
          <Icon
            icon="moreVertical"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        )}
        {isDropdownOpen && (
          <DropdownSmall
            items={dropdownItems}
            id={commentId}
            size="small"
            {...props}
          />
        )}
      </DropdownBox>
    </Layout>
  );
};

Comment.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  username: PropTypes.string,
  src: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
};

Comment.defaultProps = {
  theme: THEME.LIGHT,
  username: null,
  src: null,
  created: daysFromToday("2022-01-24"),
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export default Comment;

const usernameColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const userDetailColor = {
  dark: colors.gray400,
  light: colors.gray600,
};

const contentColor = {
  dark: colors.gray300,
  light: colors.gray700,
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;

  :hover .dropdown {
    opacity: 1;
  }
`;

const ContentBox = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`;

const DropdownBox = styled.div`
  position: relative;
  transition: 0.3s;
  opacity: 0;

  ${(props) =>
    props.isDropdownOpen &&
    css`
      opacity: 1;
    `}

  svg {
    stroke: ${colors.gray500};
    cursor: pointer;
  }

  > div {
    z-index: 9999;
    right: 0px;
    animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const User = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${(props) => usernameColor[props.theme]};
`;

const UserDetail = styled.div`
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.sm};
  color: ${(props) => userDetailColor[props.theme]};
`;

const CreatedAt = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.xs};
`;

const Content = styled.div`
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.sm};
  color: ${(props) => contentColor[props.theme]};

  white-space: pre-line;
`;
