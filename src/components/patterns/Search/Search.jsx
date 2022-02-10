/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "@/foundations";
import { colors, fontSize } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Search = ({ items, placeholder, ...props }) => {
  const [inputOpen, setInputOpen] = useState(false);

  return (
    <Layout>
      <InputBox inputOpen={inputOpen} {...props}>
        <Input placeholder={placeholder} inputOpen={inputOpen} {...props} />
      </InputBox>
      <Button onClick={() => setInputOpen(!inputOpen)} {...props}>
        <Icon icon="search" {...props} />
      </Button>
    </Layout>
  );
};

Search.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

Search.defaultProps = {
  theme: THEME.LIGHT,
};

export default Search;

const bgColor = {
  light: colors.gray50,
  dark: colors.gray900,
};

const textColor = {
  light: colors.black,
  dark: colors.white,
};

const Layout = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 200px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: ${(props) => bgColor[props.theme]};
  cursor: pointer;

  svg {
    height: 18px;
    width: 18px;
    stroke: ${colors.gray500};
  }
`;

const InputBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  box-sizing: border-box;

  height: 32px;
  width: 100%;
  padding: 0 16px;
  border-radius: 32px;

  background-color: ${(props) => bgColor[props.theme]};
  transition: 0.3s;

  ${(props) => !props.inputOpen && "width: 0;"}
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: none;

  color: ${(props) => textColor[props.theme]};

  ::placeholder {
    color: ${(props) =>
    props.inputOpen ? colors.gray500 : colors.transparent};
    font-size: ${fontSize.p};
  }

  :focus {
    outline: none;
  }
`;
