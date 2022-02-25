import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "@/_shared";

const borderColor = {
  light: colors.gray100,
  dark: colors.gray900,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  width: 100%;
  margin: auto;
  padding-top: 32px;
`;

export const FeedItemLink = styled(Link)`
  width: 100%;
  padding-bottom: 32px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
  text-decoration: none;
`;
