import styled from "styled-components";

import { Typography } from "@/foundations";
import { colors, fontWeight } from "@/_shared";

export const LogoBox = styled.div``;

export const CloseIconBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;

  svg {
    width: 18px;
    stroke: ${colors.gray500};
    cursor: pointer;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px;
  gap: 30px;
`;

export const TextBox = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled(Typography)`
  color: ${colors.gray900};
  text-align: left;
  white-space: pre-line;
  margin-bottom: 28px;
`;

export const SubTitle = styled(Typography)`
  color: ${colors.gray400};
  text-align: left;
  white-space: pre-line;
`;

export const ButtonLink = styled.a`
  text-decoration: none;
`;

export const AskingForHelp = styled.div`
  color: ${colors.blue100};
  font-weight: ${fontWeight.bold};
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
`;
