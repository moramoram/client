import React from "react";
import PropTypes from "prop-types";

import { Layout, TitleBox, Title, Content } from "./SideBarItem.styled";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const SideBarItem = ({ title, description, icon, isLoading, ...props }) => {
  const text = isLoading ? "" : title;
  const desc = isLoading ? "" : description;
  const iconname = isLoading ? "" : icon;
  return (
    <Layout {...props}>
      <TitleBox isLoading={isLoading} {...props}>
        <Icon icon={iconname} width="18" height="18" />
        <Title>{text}</Title>
      </TitleBox>
      <Content isLoading={isLoading} {...props}>
        {desc}
      </Content>
    </Layout>
  );
};

SideBarItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

SideBarItem.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
};

export default SideBarItem;
