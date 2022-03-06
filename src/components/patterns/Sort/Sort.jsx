import React, { useState } from "react";
import PropTypes from "prop-types";

import { Layout, Button, Text } from "./Sort.styled";
import { DropdownSmall } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Sort = ({ items, onClick, value, ...props }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [current, setCurrent] = useState(
    !!value.label ? value.label : items[0].label
  );

  const dropdownItems = items.map((item) => ({
    onClick: () => {
      onClick(item);
      setCurrent(item.label);
      setDropdownOpen(!dropdownOpen);
    },
    ...item,
  }));

  return (
    <>
      <Layout>
        <Button onClick={() => setDropdownOpen(!dropdownOpen)} {...props}>
          <Text {...props}>{current}</Text>
          <Icon icon="chevronDown" />
        </Button>
        {dropdownOpen && (
          <DropdownSmall
            className="dropdown"
            items={dropdownItems}
            {...props}
          />
        )}
      </Layout>
    </>
  );
};

const criteriaData = [
  {
    label: "메뉴",
    value: "menu",
  },
  {
    label: "메뉴",
    value: "menu",
  },
];

Sort.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  items: PropTypes.array,
};

Sort.defaultProps = {
  theme: THEME.LIGHT,
  items: criteriaData,
  value: criteriaData[0],
};

export default Sort;
