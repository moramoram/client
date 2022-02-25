/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Layout, Button, InputBox, Input } from "./Search.styled";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Search = ({ items, placeholder, value, ...props }) => {
  const [inputOpen, setInputOpen] = useState(!!value);

  return (
    <Layout>
      <InputBox inputOpen={inputOpen} {...props}>
        <Input
          placeholder={placeholder}
          inputOpen={inputOpen}
          defaultValue={value}
          {...props}
        />
      </InputBox>
      <Button onClick={() => setInputOpen(!inputOpen)} {...props}>
        <Icon icon="search" {...props} />
      </Button>
    </Layout>
  );
};

Search.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  theme: THEME.LIGHT,
  placeholder: "검색",
};

export default Search;
