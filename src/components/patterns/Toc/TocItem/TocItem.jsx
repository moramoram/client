import React from "react";
import PropTypes from "prop-types";

import { Text, Number, Layout } from "./TocItem.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const TocItem = ({ children, number, ...props }) => {
  return (
    <Layout {...props}>
      <Text className="menu" {...props}>
        {children}
      </Text>
      <Number>{number}</Number>
    </Layout>
  );
};

TocItem.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUS)),
  theme: PropTypes.oneOf(Object.values(THEME)),
  children: PropTypes.node.isRequired,
};

TocItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  children: "메뉴",
  number: "n",
};

export default TocItem;
