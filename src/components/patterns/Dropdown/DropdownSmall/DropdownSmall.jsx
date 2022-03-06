import React from "react";
import PropTypes from "prop-types";

import { DropdownItem } from "../DropdownItem";
import { Layout, MenuBox } from "./DropdownSmall.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const DropdownSmall = ({ items, ...props }) => {
  return (
    <Layout {...props}>
      <MenuBox {...props}>
        {items.map(({ label, value, onClick }) => (
          <DropdownItem
            children={label}
            key={value}
            onClick={onClick}
            {...props}
          />
        ))}
      </MenuBox>
    </Layout>
  );
};

DropdownSmall.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  items: PropTypes.array.isRequired,
};

DropdownSmall.defaultProps = {
  theme: THEME.LIGHT,
  items: [
    {
      name: "edit",
      title: "수정",
      onClick: () => console.log("수정"),
    },
    {
      name: "delete",
      title: "삭제",
      onClick: () => console.log("삭제"),
    },
  ],
};

export default DropdownSmall;
