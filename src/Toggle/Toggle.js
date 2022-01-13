import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color } from "../shared/styles";

const StyledInput = styled.input`
  display: none;
  &:checked + label {
    background-color: ${color.blue100};
    .switch {
      transform: translateX(20px);
    }
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: block;
  height: 24px;
  width: 44px;
  border-radius: 44px;
  transition: 0.3s;
  background-color: ${color.gray200};
`;

const Switch = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: transform 0.2s linear;
  background-color: ${color.white};
`;

export function Toggle({ isChecked, handleToggle, ...props }) {
  return (
    <>
      <StyledInput
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id="asdf"
      />
      <StyledLabel htmlFor="asdf">
        <Switch className="switch"></Switch>
      </StyledLabel>
    </>
  );
}
