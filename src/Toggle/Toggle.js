import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color } from "../shared/styles";

const StyledLabel = styled.label`
  display: block;
  position: relative;

  width: 44px;
  height: 24px;
  border-radius: 44px;
  background-color: ${color.gray200};

  cursor: pointer;
  transition: 0.3s;
`;

const StyledInput = styled.input`
  :checked + div {
    transform: translateX(20px);
  }
`;

const Switch = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${color.white};

  transition: transform 0.2s linear;
`;

export function Toggle({ ...props }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <>
      <StyledLabel checked={isChecked}>
        <StyledInput
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <Switch className="switch" />
      </StyledLabel>
    </>
  );
}
