/* eslint-disable prettier/prettier */
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Select from "react-select";
import Creatable from "react-select/creatable";

import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ERROR: "error",
};

const Selector = forwardRef(
  ({ title, options, placeholder, message, ...props }, selectRef) => {


    return (
      <Layout>
        <Label {...props}>{title}</Label>
        {props.creatable ? (
          <Creatable
            styles={customStyles(props)}
            options={options}
            placeholder={placeholder}
            ref={selectRef}
            {...props}
          />
        ) : (
          <Select
            styles={customStyles(props)}
            options={options}
            placeholder={placeholder}
            ref={selectRef}
            {...props}
          />
        )}

        <Message {...props}>{message}</Message>
      </Layout>
    );
  }
);

Selector.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  options: PropTypes.array,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  isMulti: PropTypes.bool,
};

Selector.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  options: [
    { value: "Android", label: "Android" },
    { value: "C++", label: "C++" },
    { value: "Django", label: "Django" },
    { value: "Docker", label: "Docker" },
    { value: "Flutter", label: "Flutter" },
    { value: "Go", label: "Go" },
    { value: "JPA", label: "JPA" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Linux", label: "Linux" },
    { value: "Mybatis", label: "Mybatis" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Redis", label: "Redis" },
    { value: "SQL", label: "SQL" },
    { value: "Spring", label: "Spring" },
    { value: "Swift", label: "Swift" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Vue.js", label: "Vue.js" },
  ],
  placeholder: "Placeholder",
  isMulti: false,
};

export default Selector;

const textColor = {
  light: colors.black,
  dark: colors.white,
};

const bgColor = {
  light: colors.gray50,
  dark: colors.gray900,
};

const focusBgColor = {
  light: colors.white,
  dark: colors.black,
};

const borderColor = {
  light: {
    default: colors.gray50,
    error: colors.errorOpacity200,
  },
  dark: {
    default: colors.gray900,
    error: colors.errorOpacity200,
  },
};

const optionBgColor = {
  light: colors.gray200,
  dark: colors.gray600,
};

const optionTextColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const labelColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const msgColor = {
  default: colors.gray400,
  error: colors.error,
};

const hoverColor = {
  default: colors.blueOpacity200,
  error: colors.errorOpacity200,
};

const insetColor = {
  default: colors.blue100,
  error: colors.errorOpacity200,
};

const focusColor = {
  default: colors.blueOpacity100,
  error: colors.errorOpacity100,
};

const activeColor = {
  default: colors.blueOpacity200,
  error: colors.errorOpacity200,
};

const requiredColor = {
  default: colors.blue100,
  error: colors.errorOpacity200,
  success: colors.blue100,
};

const customStyles = (props) => ({
  control: (provided) => ({
    ...provided,
    padding: "2px 16px",
    border: `1px solid ${borderColor[props.theme][props.status]}`,
    borderRadius: "8px",
    boxShadow: shadows.button,

    backgroundColor: bgColor[props.theme],
    transition: "0.3s",

    ":hover": {
      border: `1px solid ${hoverColor[props.status]}`,
      boxShadow: `inset 0 0 0 1px ${hoverColor[props.status]}`,
      backgroundColor: focusBgColor[props.theme],
    },

    ":focus-within:hover": {
      border: `1px solid ${insetColor[props.status]}`,
    },

    ":focus-within": {
      boxShadow: `0 0 0 3px ${focusColor[props.status]}, inset 0 0 0 1px ${insetColor[props.status]
        }`,
    },
  }),

  input: (provided) => ({
    ...provided,
    color: textColor[props.theme],
  }),

  singleValue: (provided) => ({
    ...provided,
    color: textColor[props.theme],
  }),

  placeholder: (provided) => ({
    ...provided,
    color: colors.gray500,
    whiteSpace: "nowrap",
    minWidth: "40px",
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: colors.gray500,

    ":hover": {
      color: colors.gray500,
    },
  }),

  indicatorsContainer: (provided) => ({
    ...provided,
    svg: {
      color: colors.gray500,
    },
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: borderColor[props.theme],
  }),

  menu: (provided) => ({
    ...provided,
    top: "2.4rem",
    borderRadius: "8px",
    border: `1px solid ${borderColor[props.theme]}`,
    boxShadow: shadows.button,

    backgroundColor: bgColor[props.theme],
  }),

  menuList: (provided) => ({
    ...provided,
    color: textColor[props.theme],
  }),

  noOptionsMessage: (provided) => ({
    ...provided,
    color: colors.gray500,
  }),

  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? focusColor.default : bgColor[props.theme],
    color: textColor[props.theme],

    ":active": {
      background: activeColor.default,
      color: textColor[props.theme],
    },
    ":first-of-type": {
      borderRadius: "3px 3px 0 0",
    },
    ":last-of-type": {
      borderRadius: "0 0 3px 3px",
    },
  }),

  multiValue: (provided) => ({
    ...provided,
    paddingLeft: "6px",
    borderRadius: "8px",
    backgroundColor: optionBgColor[props.theme],
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    padding: "4px",
    color: optionTextColor[props.theme],
  }),

  multiValueRemove: (provided) => ({
    ...provided,
    borderRadius: "2px 8px 8px 2px",
    color: colors.gray500,

    ":hover": {
      backgroundColor: "#f8736a84",
      color: "#850900",
    },
  }),
});

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${(props) => labelColor[props.theme]};

  ${(props) =>
    props.isRequired &&
    css`
      ::after {
        content: "*";
        color: ${requiredColor[props.status]};
        padding-left: 0.2rem;
      }
    `}
`;

const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  color: ${(props) => msgColor[props.status]};
`;
