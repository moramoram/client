import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import {
  Layout,
  ContentBox,
  DropdownBox,
  TextBox,
  InfoBox,
  User,
  UserDetail,
  CreatedAt,
  Content,
} from "./Comment.styled";
import { Avatar, DropdownSmall } from "@/components";
import { Icon } from "@/foundations";

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
  const usernameRender = username || "익명";
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
  ordinal: PropTypes.number,
  campus: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  commentId: PropTypes.number,
  dropdownItems: PropTypes.array,
  isDisabled: PropTypes.bool,
};

Comment.defaultProps = {
  theme: THEME.LIGHT,
  username: "",
  src: null,
  created: daysFromToday("2022-01-24"),
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export default Comment;
