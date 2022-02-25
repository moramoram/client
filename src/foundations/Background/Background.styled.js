import styled from "styled-components";
import { colors } from "@/_shared";

const bgColors = {
  dark: colors.black,
  blue: colors.blue100,
  light: colors.white,
};

export const Layout = styled.div`
  padding: 5rem;
  border-radius: 12px;
  background-color: ${(props) => bgColors[props.theme]};
`;
