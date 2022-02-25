import React from "react";
import PropTypes from "prop-types";

import { Layout, Text } from "./CommunityCreateButton.styled";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CommunityCreateButton = ({ placeholder, icon, ...props }) => {
  return (
    <Layout {...props}>
      <Icon icon="edit2" />
      <Text {...props}>게시글을 작성하세요</Text>
    </Layout>
  );
};

CommunityCreateButton.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

CommunityCreateButton.defaultProps = {
  theme: THEME.LIGHT,
};

export default CommunityCreateButton;
