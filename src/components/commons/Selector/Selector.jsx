import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Select from "react-select";

import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ERROR: "error",
};

const Selector = ({ title, options, placeholder, message, ...props }) => {
  return (
    <Layout>
      <Label {...props}>{title}</Label>
      <Select
        styles={customStyles(props)}
        options={options}
        placeholder={placeholder}
        {...props}
      />
      <Message {...props}>{message}</Message>
    </Layout>
  );
};

Selector.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  options: PropTypes.array,
  placeholder: PropTypes.string,
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
  light: colors.white,
  dark: colors.gray900,
};

const borderColor = {
  light: colors.gray300,
  dark: colors.gray700,
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
  default: "#4A83EF77",
  error: "#f04438cf",
};

const insetColor = {
  default: colors.blue100,
  error: "#f04438cf",
};

const focusColor = {
  default: "#4A83EF33",
  error: "#f8736a33",
};

const activeColor = {
  default: "#4A83EF77",
  error: "#f8736a77",
};

const customStyles = (props) => ({
  control: (provided) => ({
    ...provided,
    padding: "2px 16px",
    border: `1px solid ${borderColor[props.theme]}`,
    borderRadius: "8px",
    boxShadow: [
      props.status === STATUS.ERROR
        ? `0 0 0 3px ${focusColor[props.status]}, inset 0 0 0 1px ${
            insetColor[props.status]
          }`
        : shadows.button,
    ],
    backgroundColor: bgColor[props.theme],

    ":hover": {
      border: `1px solid ${hoverColor[props.status]}`,
      boxShadow: `inset 0 0 0 1px ${hoverColor[props.status]}`,
    },

    ":focus-within:hover": {
      border: `1px solid ${insetColor[props.status]}`,
    },

    ":focus-within": {
      boxShadow: `0 0 0 3px ${focusColor[props.status]}, inset 0 0 0 1px ${
        insetColor[props.status]
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

    ":active": {
      background: activeColor.default,
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
`;

const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  color: ${(props) => msgColor[props.status]};
`;
