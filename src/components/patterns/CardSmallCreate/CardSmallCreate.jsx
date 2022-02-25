import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Layout, TextBox, Thumbnail, Title } from "./CardSmallCreate.styled";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardSmallCreate = ({ content, companyData, ...props }) => {
  return (
    <Link
      to={{
        pathname: "/study/create",
        search: `?company=${companyData.companyName}`,
      }}
    >
      <Layout {...props}>
        <Thumbnail {...props}>
          <Icon icon="plus" />
        </Thumbnail>
        <TextBox>
          <Title {...props}>{content}</Title>
        </TextBox>
      </Layout>
    </Link>
  );
};

CardSmallCreate.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

CardSmallCreate.defaultProps = {
  theme: THEME.LIGHT,
};

export default CardSmallCreate;
