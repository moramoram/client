import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, typography } from "../shared/styles";

const Text = styled.span`
  display: inline-block;
  color: ${(props) => (props.isDarkmode ? color.gray25 : color.gray900)};
  font-size: ${typography.size.paragraph};
  font-weight: ${(props) =>
    props.isActive ? typography.weight.bold : typography.weight.regular};
  text-decoration: none;
`;

const StyledNavbarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  width: 100px;
  border-bottom: 3px solid
    ${(props) => (props.isActive ? color.blue100 : "#00000000")};

  cursor: pointer;
  :hover {
    span {
      color: ${(props) => (props.isDarkmode ? color.gray200 : color.gray600)};
      transition: 0.3s;
    }
  }
`;

export function NavbarItem({ children, ...props }) {
  return (
    <StyledNavbarItem {...props}>
      <Text {...props}>{children}</Text>
    </StyledNavbarItem>
  );
}

NavbarItem.propTypes = {
  isActive: PropTypes.bool,
  isDarkmode: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
