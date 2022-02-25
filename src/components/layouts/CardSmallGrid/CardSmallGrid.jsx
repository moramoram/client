import React from "react";
import PropTypes from "prop-types";

import { Layout, CardItemLink } from "./CardSmallGrid.styled";
import { CardSmall } from "@/components";

const CardSmallGrid = ({ data, theme, isLoading, ...props }) => {
  return (
    <Layout {...props}>
      {data.map(({ url, ...props }, idx) => {
        return (
          <CardItemLink to={url} key={idx}>
            <CardSmall theme={theme} isLoading={isLoading} {...props} />
          </CardItemLink>
        );
      })}
    </Layout>
  );
};

CardSmallGrid.propTypes = {
  list: PropTypes.arrayOf(Object),
};

export default CardSmallGrid;
