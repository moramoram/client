import styled from "styled-components";
import { DropdownSmall } from "@/components";
import {
  animations,
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  loadings,
} from "@/_shared";

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

const highlightColor = {
  true: colors.blue100,
  false: colors.gray500,
};

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const textColor = {
  light: colors.gray700,
  dark: colors.gray300,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 100px 12px 100px 12px;
  padding-top: 100px;

  overflow: hidden;
  margin: auto;
  max-width: 940px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    border-radius: 4px;
    ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

export const SideBarBox = styled.div`
  margin: 20px 0px;
`;

export const BadgeBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 10px;
`;

export const Highlight = styled.div`
  min-width: 70px;
  min-height: ${lineHeight.lg};

  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  font-weight: ${fontWeight.bold};
  color: ${(props) => highlightColor[props.status]};
`;

export const Title = styled.div`
  min-width: 160px;
  min-height: ${lineHeight.h2};

  font-size: calc(${fontSize.h2} - 2px);
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 160px;
  min-height: ${lineHeight.lg};

  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.lg};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const DropdownBox = styled.div`
  position: relative;
  padding-top: 1rem;

  svg {
    stroke: ${colors.gray500};
    cursor: pointer;
  }

  > div {
    z-index: 9999;
    right: 0px;
    animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  }
`;

export const Dropdown = styled(DropdownSmall)`
  width: 160px;
`;

export const Content = styled.div`
  padding: 0 1rem 2rem 1rem;
  color: ${(props) => textColor[props.theme]};

  h3 {
    margin-bottom: 0;
  }

  ul {
    padding-left: 32px;
  }
`;

export const FixedBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;

  padding: 0px 12px 20px 12px;
  background: ${(props) => bgColor[props.theme]};

  > button {
    flex-grow: 1;
    padding: 0;
  }
`;

export const ButtonBg = styled.div`
  width: 100%;
  height: 2rem;
  background-image: linear-gradient(
    to top,
    ${(props) => bgColor[props.theme]},
    ${colors.transparent}
  );
`;
